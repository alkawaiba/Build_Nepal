from rest_framework import serializers

from accounts.serializers import UserSerializer
from membership import models


class MembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Membership
        fields = ["header_text", "price", "membership_validity_in_months", "membership_tier", "features", ]


class MembershipSubscriptionLogSerializer(serializers.ModelSerializer):
    membership = MembershipSerializer(read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = models.MembershipSubscriptionLog
        fields = ["subscription_datetime", "user", "membership", ]


class SubscribeToMembershipRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MembershipSubscriptionLog
        fields = ["subscription_datetime", "user", "membership", ]
