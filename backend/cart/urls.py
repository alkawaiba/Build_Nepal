from django.urls import path

from cart import views

app_name = "cart"

urlpatterns = [
    path("get-cart-products/", views.get_cart_details, name="get_cart_details"),
    path("add-to-cart/", views.add_to_cart, name="add_to_cart"),
    path("remove-from-cart/", views.remove_from_cart, name="remove_from_cart"),
]
