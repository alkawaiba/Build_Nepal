import datetime

from rest_framework import status
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from membership import models
from membership import serializer
from utils.api_view import drf_main_func_memory_api_view


@drf_main_func_memory_api_view(http_method_names=["GET"])
def get_membership_details(request):
    # Gets all the membership available
    memberships = models.Membership.objects.all()

    return Response({
        # converts the query into JSON/Python Dictionary type object to send to FE
        "memberships": serializer.MembershipSerializer(memberships, many=True).data
    }, status=status.HTTP_200_OK)


@drf_main_func_memory_api_view(http_method_names=["POST"])
@permission_classes([IsAuthenticated])  # Permission to access this route
def subscribe_to_membership(request):
    # data gained from the FE, convert to serializer object
    data = serializer.SubscribeToMembershipRequestSerializer(
        data={
            **request.data,  # keep all data received from FE as it is, in dict
            "user": request.user.id  # replace "user" with data gained from `request.user.id`
        }
    )

    if data.is_valid():
        # Create new membership log
        membership_log = data.save()

        # calculate expiry time and set it on user's membership expiry date
        request.user.membership_expiry_datetime = membership_log.subscription_datetime + datetime.timedelta(
            days=membership_log.membership.membership_validity_in_months * 30
        )
        # Save user data
        request.user.save()

        return Response({
            # message to send to FE
            "message": f"{request.user.username} subscribed to {membership_log.membership.membership_tier}",
            # Data from the model to send to FE
            "membership": serializer.MembershipSubscriptionLogSerializer(membership_log).data
        }, status=status.HTTP_200_OK)
    else:
        # send errors for each field to FE
        return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)