from curses.ascii import US
from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Users


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ['username', 'password', 'first_name', 'last_name', 'email']
