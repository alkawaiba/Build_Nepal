from rest_framework import serializers

from contact import models


class ContactFormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ContactFormData
        fields = ("email", "subject", "description", "address")
