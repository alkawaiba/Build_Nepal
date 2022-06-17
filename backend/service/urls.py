from django.urls import path

from service import views

app_name = "service"  # for namespace requirement, as per django docs!!

urlpatterns = [
    # path("services-by-category/<str:category>/", views.get_service_list, name="get_service_list")
    #       ||||||||||||||||||||||||||||||||||||   ||||||||||||||||||||||  |||||||||||||||||||||||
    #       url path for which the func is run    func to run for this url  name given to this path
    path("services-by-category/<str:category>/", views.get_service_list, name="get_service_list"),

    path("get-all-categories/", views.get_categories, name="get_categories"),
    path("create-new-service/", views.create_new_service, name="create_new_service"),
    path("service-detail/<int:service_id>/", views.get_service_detail, name="get_service_detail"),
]