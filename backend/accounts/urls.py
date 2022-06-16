from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from .views import (
    UserView,
    UserCreateView,
    UserDeleteView,
)

app_name = "accounts"

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    #             |||||||||||||||||||||||||||||||
    #    .as_view() is used to get a callable thing for that class
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('signup/', UserCreateView.as_view(), name='signup'),
    path('delete/', UserDeleteView.as_view(), name='delete'),
    path('me/', UserView.as_view(), name='me'),
]