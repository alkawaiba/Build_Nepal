from django.contrib import admin
from membership import models


@admin.register(models.Membership)
class MembershipAdmin(admin.ModelAdmin):
    pass


@admin.register(models.MembershipSubscriptionLog)
class MembershipSubscriptionLogAdmin(admin.ModelAdmin):
    pass
