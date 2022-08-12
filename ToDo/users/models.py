import email
from django.db import models
from django.contrib.auth.models import AbstractUser


class Users(AbstractUser):
    email = models.EmailField(max_length=164, unique=True, blank=True)
