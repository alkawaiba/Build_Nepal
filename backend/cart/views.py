from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response

from accounts.models import User
from cart import serializers
from cart.models import Order
from cart.serializers import CartSerializer
from service.models import Service
from utils.api_view import drf_main_func_memory_api_view


@drf_main_func_memory_api_view(http_method_names=["GET"])
@permission_classes([IsAuthenticated])
def get_cart_details(request: Request):
    """Gets all the products in the cart. Check the list of all the available endpoints below:

    * ``http://localhost:8000/admin/doc/views/#ns|cart``
    """

    user: User = request.user

    return Response({
        "cart": CartSerializer(user.cart).data
    }, status=status.HTTP_200_OK)


@drf_main_func_memory_api_view(http_method_names=["POST"])
@permission_classes([IsAuthenticated])
@csrf_exempt
def add_to_cart(request: Request):
    """Adds the given product to the currently logged-in user. Check the list of all the available endpoints below:

    * ``http://localhost:8000/admin/doc/views/#ns|cart``
    """
    test_user = User.objects.last()

    form_data_serializer = serializers.AddToCartRequestDataSerializer(data=request.data)

    if not form_data_serializer.is_valid():
        return Response(form_data_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    number_of_orders = form_data_serializer.data.get("number_of_orders")
    service_id = form_data_serializer.data.get("id")

    try:
        service = Service.objects.get(id=service_id)
        order = Order(
            service=service,
            number_of_order=number_of_orders
        )

        service.save()
        order.save()

        test_user.cart.orders.add(order)

        return Response({
            "message": f"{number_of_orders} '{service.name}' added to cart",
            "order": serializers.OrderSerializer(order).data
        }, status=status.HTTP_201_CREATED)
    except Service.DoesNotExist:
        return Response({
            "error": f"Product/Service with id of '{service_id}' not found"
        }, status=status.HTTP_404_NOT_FOUND)
    except Exception as _:  # NOQA
        return Response({
            "error": "Can't process your request."
        }, status=status.HTTP_400_BAD_REQUEST)


@drf_main_func_memory_api_view(http_method_names=["POST"])
@permission_classes([IsAuthenticated])
@csrf_exempt
def remove_from_cart(request: Request):
    """removes the given product from the currently logged-in user's cart.
    Check the list of all the available endpoints below:

    * ``http://localhost:8000/admin/doc/views/#ns|cart``
    """

    form_data_serializer = serializers.RemoveFromCartRequestDataSerializer(data=request.data)

    if not form_data_serializer.is_valid():
        return Response(form_data_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    order_id = form_data_serializer.data.get("id")

    try:
        order = Order.objects.get(id=order_id)
        order_data = serializers.OrderSerializer(order).data

        order.delete()

        return Response({
            "message": f"Order with id '{order_id}' removed from cart",
            "order": order_data
        }, status=status.HTTP_200_OK)

    except Order.DoesNotExist:
        return Response({
            "error": f"Order with id of '{order_id}' not found"
        }, status=status.HTTP_404_NOT_FOUND)
    except Exception as _:  # NOQA
        return Response({
            "error": "Can't process your request."
        }, status=status.HTTP_400_BAD_REQUEST)
