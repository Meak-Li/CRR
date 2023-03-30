from django.shortcuts import render
from rest_framework.views import APIView


# Create your views here.
class UserInformationView(APIView):

    def get(self, request, *args, **kwargs):
        name = request.user.username
        return render(request, 'user_information_1.html', {'name': name})


class UserInformationLittleView(APIView):

    def get(self, request, *args, **kwargs):
        name = request.GET.get('name')
        return render(request, 'user_information_2.html', {'name': name})
