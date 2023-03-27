from django.contrib import admin
from app.models import Room, Book, UserInfo
from django.contrib.auth.admin import UserAdmin
# Register your models here.


#  配置会议室信息表
@admin.register(Room)
class RoomConfig(admin.ModelAdmin):
    list_display = ('caption','num')
    list_filter=('num',)
    search_fields = ('caption','num')

@admin.register(Book)
class BookConfig(admin.ModelAdmin):
    list_display = ('user','room','date','time_id')
    list_filter = ('user','room','date','time_id')
    search_fields = ('user','room','date','time_id')

@admin.register(UserInfo)
class UserProfileAdmin(UserAdmin):
    list_display = ('username','last_login','is_superuser','is_staff','is_active','date_joined')
    list_filter = ('last_login', 'is_staff', 'date_joined', 'is_active')
    search_fields = ('username',)
    fieldsets = (
        (None,{'fields':('username','password','first_name','last_name','email')}),
    )
