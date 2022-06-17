import functools

from rest_framework.decorators import api_view


def drf_main_func_memory_api_view(http_method_names=None):
    # API view wrapper to make sure the name of the function remains same
    def func_manager(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            return api_view(http_method_names=http_method_names)(func)(*args, **kwargs)

        return wrapper

    return func_manager