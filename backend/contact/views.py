from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response

from contact import serializers, models
from utils.api_view import drf_main_func_memory_api_view


@drf_main_func_memory_api_view(http_method_names=["POST"])
@csrf_exempt
def submit_contact_form(request):
    data = serializers.ContactFormDataSerializer(data=request.data)

    if data.is_valid():
        contact_form_data = data.save()

        return Response({
            "message": "Form successfully submitted, we will contact you as soon as possible.",
            "contact_form": serializers.ContactFormDataSerializer(contact_form_data).data
        })
    else:
        return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)