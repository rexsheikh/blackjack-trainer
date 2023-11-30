from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    rank = models.IntegerField(default=1)
    cash = models.IntegerField(default=2000)


class Hand(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    dealer_up = models.IntegerField()
    player_a = models.IntegerField()
    player_b = models.IntegerField()
    correct = models.BooleanField()


class hardTotal(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hard_total = models.IntegerField()
    dealer_up = models.IntegerField()


class softTotal(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    not_ace = models.IntegerField()
    dealer_up = models.IntegerField()


class pair(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pair = models.IntegerField()
    dealer_up = models.IntegerField()
