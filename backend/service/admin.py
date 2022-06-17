from django.contrib import admin

from service import models


# register model with admin to display it in admin panel
@admin.register(models.ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_editable = ("name",)  # fields that can be edited in admin list view
    list_display = ("id", "name",)  # fields to be displayed in admin list view
    search_fields = ("name",)  # fields used for searching
    search_help_text = "Search using 'name'"  # text display below search

    fieldsets = (  # fields formatting in detail view
        ("Category", {  # Section Name
            "fields": ("name",),  # fields to display in category
            "classes": ("wide",)  # classes to add
        }),
    )


@admin.register(models.ServiceImage)
class ServiceImageAdmin(admin.ModelAdmin):
    list_display = ("id", "striped_image_alt_text", "image")
    search_fields = ("image_alt_text",)
    search_help_text = "Search using 'Image Alt. Text'"

    fieldsets = (
        ("Image", {
            "fields": (
                ("image_alt_text", "image"),  # display 2 fields in same line
            ),
            "classes": ("wide",)
        }),
    )


@admin.register(models.Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "striped_description", "price")
    list_editable = ("price",)
    list_filter = ("categories__name",)  # filter will be seen in right side, fields to show in that filter section

    search_fields = ("name", "description", "price", "main_image_alt_text", "categories__name",),
    #                                                                       |||||||||||||||||||||
    #                                                        <RELATIONAL FIELD NAME>__<RELATED FIELD's FIELD NAME>
    search_help_text = "Search by 'service details' or 'category name'"

    # Relational field names, to use autocomplete for. Search feature can be used within the field if this is used
    autocomplete_fields = ("categories", "secondary_images",)
    fieldsets = (
        ("Categories", {  # First Section
            "fields": ("categories",),
        }),
        ("Images", {  # Second Section
            "fields": (
                ("main_image", "secondary_images"),  # two fields in same line
                ("main_image_link", "main_image_alt_text",),
            ),
        }),
        ("Service Detail Info.", {  # Third Section
            "fields": (
                ("name", "price"),
                ("description",),  # one field in one line
            ),
        })
    )