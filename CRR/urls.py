"""CRR URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.views.static import serve
from django.conf import settings
from app import views
from app.views import LoginView
from application.user_information.views import UserInformationView

urlpatterns = [
    path('admin/', admin.site.urls),
    # 用户登录
    path('login/',LoginView.as_view()),
    # 展示预订信息
    path('index/',views.index),
    # 极验滑动验证码 获取验证码的url
    path('pc-geetest/register', views.get_geetest),
    # media相关的路由设置
    re_path(r'^media/(?P<path>.*)$', serve, {"document_root": settings.MEDIA_ROOT}),
    # 处理预订请求
    path('book/',views.book),
    # 首页
    path('home/',views.home),
    # 注销
    path('logout/',views.acc_logout),
    # 用户注册
    path('reg/',views.reg),
    # 修改密码
    path('change_password/',views.change_password),
    # about
    path('about/',views.about),
    # user information
    path('user_information/', UserInformationView.as_view())
]
