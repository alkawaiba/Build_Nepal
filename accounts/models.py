from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)
from django.utils import timezone

from cart.models import Cart


# Manager is used to manage the model, in this case to create the user
class UserManager(BaseUserManager):
    def _create_user(self, email, username, full_name, password=None, save=False):
        if not email:
            raise ValueError('User must have an email address.')
        if not username:
            raise ValueError('User must have an username')
        if not full_name:
            raise ValueError('User must have a first name and last name.')

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, full_name=full_name)
        user.set_password(password)

        if save:
            user.save()

        return user

    def create_user(self, email, username, full_name, password=None):
        # creates normal user
        return self._create_user(email, username, full_name, password, save=True)

    def create_superuser(self, email, username, full_name, password=None):
        # creates superuser
        user = self._create_user(email, username, full_name, password, save=False)

        # following parameters are set explictly
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):
    #      ||||||||||||||||  ||||||||||||||||
    #  AbstractBaseUser to get ||||||||||| features for the base User
    #           PermissionsMixin to provide support for group and permissions

    # User Preferences
    cart = models.OneToOneField(
        verbose_name="Cart",
        to=Cart,
        on_delete=models.CASCADE,
        blank=True,
    )
    # End User Preferences

    # User Data
    email = models.EmailField(verbose_name='Email',
                              max_length=120, unique=True)
    username = models.CharField(verbose_name='Username', max_length=30)
    full_name = models.CharField(verbose_name="Full Name", max_length=128)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(
        verbose_name='Date Joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='Last Login', auto_now=True)
    membership_expiry_datetime = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'  # what field will be used as username, while logging in from the admin
    REQUIRED_FIELDS = ['username', 'full_name']  # required fields to create an account
    objects = UserManager()  # manager to change how the model manager functions

    def save(self, *args, **kwargs):
        if self._state.adding and not self.cart_id:
            # self._state.adding is used to know if this is creation of the model or not
            # create cart for the user
            cart = Cart()
            cart.save()
            # assign cart to user
            self.cart = cart

        # call parent save method
        return super(User, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.username