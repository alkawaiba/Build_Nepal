from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth import get_user_model

User = get_user_model()


class UserAdmin(BaseUserAdmin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.list_display = ("username", "email", "full_name", "is_staff")
        self.fieldsets = (
            ('Account Information', {
                'fields': (
                    ('email', 'username', 'password'),
                )
            }),
            ('Personal Information', {
                'fields': (
                    ('full_name',),
                )
            }),
            ('Permissions', {
                'fields': (
                    ('is_active', 'is_staff', 'is_superuser'),
                    'groups',
                    'user_permissions'
                ),
                'classes': ('collapse',)
            }),
            ('Important Dates', {
                'fields': (
                    ('date_joined', 'last_login',),
                ),
                'classes': ('collapse',)
            }),
        )

        self.add_fieldsets = (
            (None, {  # None means this section have no name
                'classes': ('wide',),
                'fields': ('email', 'username', 'full_name', 'password1', 'password2'),
            }),
        )

        self.readonly_fields = ['date_joined', 'last_login']  # Fields that can't be modified
        self.search_fields = ("username", "full_name", "email")


admin.site.register(User, UserAdmin)