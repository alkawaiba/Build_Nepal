from django.db import models

from service.models import Service


class Order(models.Model):
    service = models.ForeignKey(
        verbose_name="Service",
        to=Service,
        on_delete=models.CASCADE,
    )
    number_of_order = models.IntegerField(
        verbose_name="Number of Order",
        default=1,
    )
    total_price = models.FloatField(
        verbose_name="Total Price",
        help_text="Will be calculated when you save."
    )

    def save(self, *args, **kwargs):
        self.total_price = round(self.service.price * self.number_of_order, 2)
        return super(Order, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.service.name


class Cart(models.Model):
    orders = models.ManyToManyField(
        verbose_name="Order",
        to=Order,
        blank=True,
    )

    @property
    def total_price(self) -> float:
        # This could be used for more efficient operation, but in most case services will be used so,
        # another will be efficient ... ig !!
        # return self.order.aggregate(models.Sum("total_price")).get("total_price__sum")
        return sum((service.total_price for service in self.orders.all()))

    @property
    def number_of_items_in_cart(self) -> int:
        # using db function because most of the time only, services count will be loaded.
        return sum((service.number_of_order for service in self.orders.all()))

    def __str__(self) -> str:
        return f"Cart - {self.id}"
