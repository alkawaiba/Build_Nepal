from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer

User = get_user_model()


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("id", 'full_name', 'username', 'email', "membership_expiry_datetime")


class UserCreateSerializer(ModelSerializer):
    # override the parent method to create user
    def create(self, validated_data):
        # validated_data contains the data that is already validated from the data
        user = User(
            full_name=validated_data['full_name'],
            username=validated_data['username'],
            email=validated_data['email'],
        )
        # set password for the account
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = User
        fields = ('id', 'full_name', 'username', 'email', 'password',)
        extra_kwargs = {'password': {'write_only': True}}
        #                |||||||||||||||||||||||||||||||
        # write_only: True, means the data is not sent to FE, as password must be kept secure
        #               can only write, can't read though