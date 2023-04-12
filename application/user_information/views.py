from django.shortcuts import render
from rest_framework.views import APIView

from app.models import UserInfo


# Create your views here.
class UserInformationView(APIView):

    def get(self, request, *args, **kwargs):
        name = request.user.username
        user = UserInfo.objects.filter(username=name).first()
        return render(request, 'user_information_1.html', {
            'name': name,
            'qq': user.qq,
            'college': user.college,
            'department': user.department,
            'position': user.position,
            'classes': user.classes
        })


class UserInformationLittleView(APIView):

    def get(self, request, *args, **kwargs):
        name = request.user.username
        user = UserInfo.objects.filter(username=name).first()
        return render(request, 'user_information_2.html', {
            'name': name,
            'qq': user.qq,
            'college': user.college,
            'department': user.department,
            'position': user.position,
            'classes': user.classes
        })
