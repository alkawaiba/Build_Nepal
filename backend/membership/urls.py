from django.urls import path

from membership import views

app_name = "membership"

urlpatterns = [
    path("get-membership-details/", views.get_membership_details, name="get_membership_details"),
    path("subscribe-to-membership/", views.subscribe_to_membership, name="subscribe_to_membership"),
]
