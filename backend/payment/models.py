from django.db import models
import secrets


def get_payment_reference_token():
    return secrets.token_hex(32)


class Payment(models.Model):
    PAYMENT_METHODS = (
        ("ESEWA", "Esewa"),
        ("KHALTI", "Khalti")
    )

    payment_method = models.CharField(
        verbose_name="Payment Method",
        choices=PAYMENT_METHODS,
        max_length=32
    )

    reference = models.CharField(
        verbose_name="Payment Reference",
        default=get_payment_reference_token,
        max_length=32
    )

    amount = models.FloatField(
        verbose_name="Amount",
    )
    paid_amount = models.FloatField(
        verbose_name="Amount Paid",
        blank=True,
        null=True
    )

    verified = models.BooleanField(
        verbose_name="Verified",
        default=False
    )

    def __str__(self) -> str:
        return self.payment_method
