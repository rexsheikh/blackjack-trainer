from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User, Hand


def index(request):
    if request.user.is_authenticated:
        return render(request, "blackjack/menu.html")
    else:
        return HttpResponseRedirect(reverse("login"))


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "blackjack/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "blackjack/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "blackjack/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "blackjack/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "blackjack/register.html")


@login_required
@csrf_exempt
def blackjack(request):
    #     user = models.ForeignKey(User, on_delete=models.CASCADE)
    # dealer_up = models.IntegerField()
    # player_a = models.IntegerField()
    # player_b = models.IntegerField()

    if request.method == "GET":
        return render(request, "blackjack/blackjack.html")
    elif request.method == "POST":
        data = json.loads(request.body)
        newHand = Hand(
            user=User.objects.get(id=request.user.id),
            player_a=data.get("player_a"),
            player_b=data.get("player_b"),
            dealer_up=data.get("dealer_up"),
            correct=data.get("correct")
        )
        newHand.save()
        return JsonResponse({"message": "Hand captured successfully"}, status=201)
