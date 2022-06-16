from rest_framework import serializers
from cart import models
from service import serializers as service_serializers


class OrderSerializer(serializers.ModelSerializer):
    service = service_serializers.ServiceSerializer(read_only=True)

    class Meta:
        model = models.Order
        fields = ("id", "service", "number_of_order", "total_price")


class CartSerializer(serializers.ModelSerializer):
    orders = OrderSerializer(read_only=True, many=True)

    class Meta:
        model = models.Cart
        fields = ("id", "orders",)


class AddToCartRequestDataSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    number_of_orders = serializers.IntegerField()

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass


class RemoveFromCartRequestDataSerializer(serializers.Serializer):
    id = serializers.IntegerField()

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass
