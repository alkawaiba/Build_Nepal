from django.contrib.auth import get_user_model
from rest_framework import status, permissions
from rest_framework.generics import (
    GenericAPIView,
    CreateAPIView,
)
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import (
    UserSerializer,
    UserCreateSerializer,
)


class UserView(GenericAPIView):
    # Serializer used for serializing user model
    serializer_class = UserSerializer

    @staticmethod
    def get(request, *args, **kwargs):
        # response that will be returned, if the HTTP request type is GET
        return Response(UserSerializer(request.user).data, status=status.HTTP_200_OK)


class UserCreateView(CreateAPIView):
    # API View to add new thing to a database
    model = get_user_model()
    serializer_class = UserCreateSerializer
    permission_classes = [permissions.AllowAny]  # permissions required for creating new user


class UserDeleteView(APIView):
    permission_classes = [permissions.IsAuthenticated]  # permissions required for creating new user

    def delete(self, request, *args, **kwargs):
        # response that will be returned, if the HTTP request type is DELETE

        user = self.request.user
        user.delete()

        return Response({'result': 'success'}, status=status.HTTP_200_OK)