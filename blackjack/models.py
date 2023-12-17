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
    blackjack = models.BooleanField()

    def serialize(self):
        return {
            "id": self.id,
            "userId": self.user.id,
            "win": self.win,
            "blackjack": self.blackjack
        }


class HardTotal(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hard_total = models.IntegerField()
    dealer_up = models.IntegerField()
    correct = models.BooleanField()

    def serialize(self):
        return {
            "id": self.id,
            "userId": self.user.id,
            "hard_total": self.hard_total,
            "dealer_up": self.dealer_up,
            "correct": self.correct
        }


class SoftTotal(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    not_ace = models.IntegerField()
    dealer_up = models.IntegerField()
    correct = models.BooleanField()

    def serialize(self):
        return {
            "id": self.id,
            "userId": self.user.id,
            "not_ace": self.not_ace,
            "dealer_up": self.dealer_up,
            "correct": self.correct
        }


class Pair(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pair = models.IntegerField()
    dealer_up = models.IntegerField()
    correct = models.BooleanField()

    def serialize(self):
        return {
            "id": self.id,
            "userId": self.user.id,
            "pair": self.pair,
            "dealer_up": self.dealer_up,
            "correct": self.correct
        }
