from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    cash = models.IntegerField(default=2000)
    points = models.IntegerField(default=0)


class Hand(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    win = models.BooleanField()


class HardTotal(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hard_total = models.IntegerField()
    dealer_up = models.IntegerField()
    correct = models.BooleanField()


class SoftTotal(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    not_ace = models.IntegerField()
    dealer_up = models.IntegerField()
    correct = models.BooleanField()


class Pair(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pair = models.IntegerField()
    dealer_up = models.IntegerField()
    correct = models.BooleanField()
