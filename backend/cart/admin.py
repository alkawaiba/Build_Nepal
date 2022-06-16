from django.contrib import admin

from cart import models


@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
    @admin.display()
    def service_name(self, order):
        return order.service.name

    @admin.display()
    def per_unit_price(self, order):
        return order.service.price

    list_display = ("id", "service_name", "per_unit_price", "number_of_order", "total_price")
    list_editable = ("number_of_order",)
    list_filter = ("service__categories__name",)

    search_fields = ("service__name", "service__description",)
    search_help_text = "Search using service details"

    autocomplete_fields = ("service",)
    readonly_fields = ("total_price",)
    fieldsets = (
        ("Product || Service", {
            "fields": ("service",),
        }),
        ("Order Details", {
            "fields": (
                ("number_of_order", "total_price"),
            ),
        }),
    )


@admin.register(models.Cart)
class CardAdmin(admin.ModelAdmin):
    @admin.display()
    def user_full_name(self, cart):
        return cart.user.full_name

    @admin.display()
    def user_email(self, cart):
        return cart.user.email

    list_display = ("id", "user_full_name", "user_email", "number_of_items_in_cart", "total_price",)

    search_fields = ("user__full_name", "user__email", "orders__service__name", "orders__service__description")
    search_help_text = "Search using user, product and service details."
    list_filter = ("orders__service__categories__name",)

    autocomplete_fields = ("orders",)

    fieldsets = (
        ("Order Details", {
            "fields": ("orders",),
        }),
    )
