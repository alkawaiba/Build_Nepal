from django.db import models

from utils.text import get_striped_text


class ServiceCategory(models.Model):
    # CharField to store string in db table's column
    name = models.CharField(
        verbose_name="Service Category Name",
        max_length=64,  # max length of the category name
    )

    # the thing returned from this thing will be used displayed as default value in django admin
    def __str__(self) -> str:
        return self.name

    class Meta:
        # Meta info of the class
        verbose_name = "Service Category"  # singular name of the class
        verbose_name_plural = "Service Categories"  # plural name of the class


class ServiceImage(models.Model):
    # same as text field, but can store much longer strings, length of string depends on the db in use
    image_alt_text = models.TextField(
        verbose_name="Image alt. text",
    )
    # stores image
    image = models.ImageField(
        verbose_name="Service Image",  # thing to display in input field in django admin
        upload_to="images/service_images/secondary_images/"  # save upoaded image to this path
    )

    @property  # @property makes a function behave as a variable
    def striped_image_alt_text(self):
        # displays striped text
        striped_text = self.image_alt_text[0:15]
        return striped_text if len(self.image_alt_text) < 15 else f"{striped_text}..."

    def __str__(self) -> str:
        return self.striped_image_alt_text


class Service(models.Model):
    # models many to many field in database
    categories = models.ManyToManyField(
        verbose_name="Categories",
        to=ServiceCategory,  # many to many relationship with ServiceCategory
        blank=False,  # can't be left blank
    )

    secondary_images = models.ManyToManyField(
        verbose_name="Secondary Images",
        to=ServiceImage,
        blank=True
    )
    main_image = models.ImageField(
        verbose_name="Main Image",
        upload_to="images/service_images/main_images/",
        null=True,  # can be None
        blank=True  # can be blank
    )
    # stores url
    main_image_link = models.URLField(
        verbose_name="Main Image Link",
        null=True,
        blank=True
    )
    main_image_alt_text = models.TextField(
        verbose_name="Main Image alt. text",
        default="Service Main Image",
        blank=True
    )

    name = models.CharField(
        verbose_name="Name",
        max_length=256,
    )
    description = models.TextField(
        verbose_name="Description",
    )
    # stores number with decimal places
    price = models.FloatField(
        verbose_name="Price",
    )

    # returns url or path to uploaded image. Given that what is available
    @property
    def smart_image(self):
        if self.main_image:
            return f"http://localhost:8000{self.main_image.url}"
        else:
            return self.main_image_link

    # gets striped description
    @property
    def striped_description(self):
        return get_striped_text(self.description, 15)

    # gets all the images in the model
    @property
    def images(self):
        return self.secondary_images.all() + [self.main_image]

    def __str__(self) -> str:
        return self.name