from django.db import models

from accounts.models import User


# Feature list return, django's requirement
def get_default_features_list():
    return [
        {"feature_name": "Feature 1", "is_included": True},
        {"feature_name": "Feature 2", "is_included": True},
        {"feature_name": "Feature 3", "is_included": False},
    ]


class Membership(models.Model):
    header_text = models.CharField(
        max_length=128
    )

    price = models.FloatField()
    membership_validity_in_months = models.IntegerField(default=1)

    membership_tier = models.CharField(
        max_length=128
    )

    features = models.JSONField(  # stores JSON datatype in db
        default=get_default_features_list
    )

    def __str__(self):
        return self.membership_tier


class MembershipSubscriptionLog(models.Model):
    # Stores date and time in the database. auto_now_add=True, adds time of creation time implicitly
    subscription_datetime = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    #                                 |||||||||||||||||||||||||
    #     models.CASCADE means, delete all the related items, if data in this column is deleted
    membership = models.ForeignKey(to=Membership, on_delete=models.CASCADE)