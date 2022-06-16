from django.urls import path

from contact import views

app_name = "contact"

urlpatterns = [
    path("submit-contact-form/", views.submit_contact_form, name="submit_contact_form"),
]
