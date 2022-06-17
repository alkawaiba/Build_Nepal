from rest_framework import serializers
from payment import models


class InitPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Payment
        fields = ("reference",)


class InitPaymentRequestSerializer(serializers.ModelSerializer):
    pass
