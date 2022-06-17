from rest_framework import serializers

from service import models


class ServiceCategorySerializer(serializers.ModelSerializer):
    # SAME FOR ALL THE MODELS BELOW, EXCEPT SPECIFIED!!
    #                           |||||||||||||||||||||||||||
    # ModelSerializer is used to serialize Model

    # special class inside class to give information on how the serializer must work
    class Meta:
        # model to serialize
        model = models.ServiceCategory
        # fields in model to serialize
        fields = ("id", "name",)


class ServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ServiceImage
        fields = ("id", "image_alt_text", "image")


class ServiceSerializer(serializers.ModelSerializer):
    # these names must match with the corresponding field names mentioned in Meta class to make it work
    # this will help to serialize those fields using these serializers
    categories = ServiceCategorySerializer(many=True, read_only=True)
    secondary_images = ServiceImageSerializer(many=True, read_only=True)

    class Meta:
        model = models.Service
        fields = (
            "id", "categories", "smart_image", "main_image", "main_image_link", "secondary_images",
            "main_image_alt_text", "name", "description", "price"
        )


class ServiceCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Service
        fields = ("main_image_link", "name", "description", "price", "categories")