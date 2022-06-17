from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.request import Request
from rest_framework.response import Response

from service import models as service_models
from service import serializers
from utils.api_view import drf_main_func_memory_api_view


@drf_main_func_memory_api_view(http_method_names=["GET"])
def get_service_list(request: Request, category: str):
    """Provides the list of services provided. Check the list of all the available endpoints below:

    * http://localhost:8000/admin/doc/views/#ns|service
    """

    try:
        # get all services with given category
        services = service_models.ServiceCategory.objects.get(name=category).service_set
        # convert the services to JSON format using serializer
        serialized_services = serializers.ServiceSerializer(services, many=True).data
    except service_models.ServiceCategory.DoesNotExist:
        # give empty data if given category is not found
        serialized_services = []

    # send data to FE
    return Response({
        "services": serialized_services
    }, status=status.HTTP_200_OK)


@drf_main_func_memory_api_view(http_method_names=["GET"])
def get_categories(request):
    """Gets all the available categories. Check the list of all the available endpoints below:

    * http://localhost:8000/admin/doc/views/#ns|service
    """

    return Response({
        "categories": serializers.ServiceCategorySerializer(
            service_models.ServiceCategory.objects.all(),  # get data for ServiceCategory in JSON format
            many=True  # above query returns multiple value so
        ).data
    }, status=status.HTTP_200_OK)


@drf_main_func_memory_api_view(http_method_names=["POST"])
@csrf_exempt
def create_new_service(request: Request):
    """Creates new service. Check the list of all the available endpoints below:

    * http://localhost:8000/admin/doc/views/#ns|service
    """

    # convert data received from FE to serialization object
    new_service = serializers.ServiceCreationSerializer(data=request.data)

    # check if the data got from FE is valid
    if new_service.is_valid():
        # save data
        service = new_service.save()
        # send success message and service data to FE
        return Response({
            "message": "Service created successfully",
            "service": serializers.ServiceSerializer(service).data  # service data from saved model in JSON formats
        }, status=status.HTTP_200_OK)
    else:
        # send error messages for each field
        return Response(new_service.errors, status=status.HTTP_400_BAD_REQUEST)


@drf_main_func_memory_api_view(http_method_names=["GET"])
@csrf_exempt
def get_service_detail(request, service_id: int):
    """Creates new service. Check the list of all the available endpoints below:

    * http://localhost:8000/admin/doc/views/#ns|service
    """

    # convert service data to JSON format
    service = serializers.ServiceSerializer(
        get_object_or_404(  # gets the object, if given query matches. Else, returns 404 error response
            service_models.Service,
            id=service_id,
        )
    )

    # send data to FE
    return Response(service.data, status=status.HTTP_200_OK)