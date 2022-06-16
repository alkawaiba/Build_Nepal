from django.core.mail import send_mail
from django.db import models

from accounts.models import User


class ContactFormData(models.Model):
    email = models.EmailField()
    subject = models.CharField(max_length=512)
    description = models.TextField()
    address = models.CharField(max_length=256)

    # override the save method of parent class
    def save(self, *args, **kwargs):
        admins = User.objects.filter(is_superuser=True)

        # send mail to all admin using django's mail system
        send_mail(
            subject=f"Form submitted -- {self.subject}",
            message=f"Email From: {self.email}\n\nBELOW IS THE MESSAGE\n\n{self.description}",
            from_email="example@example.com",
            recipient_list=[admin.email for admin in admins],
        )

        super(ContactFormData, self).save(*args, **kwargs)  # run the inherited class save function

    def __str__(self):
        return self.email