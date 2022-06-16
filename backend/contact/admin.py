from django.contrib import admin
from contact import models


@admin.register(models.ContactFormData)
class ContactFormDataAdmin(admin.ModelAdmin):
    pass
