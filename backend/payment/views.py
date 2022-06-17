import requests
from django.views.decorators.csrf import csrf_exempt

from utils.api_view import drf_main_func_memory_api_view


@drf_main_func_memory_api_view(http_method_names=["POST"])
# @permission_classes([IsAuthenticated])
@csrf_exempt
def init_esewa_payment(request):
    """Initiates the esewa payment by generating unique id and everything

    """
    pass


@drf_main_func_memory_api_view(http_method_names=["GET"])
def complete_esewa_payment(request):
    """Validates the payment was successful and no fraudulent transactions was carried out

    """
    pass
