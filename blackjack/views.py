from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import *


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


@login_required
@csrf_exempt
def playerInfo(request):
    if request.method == "GET":
        user = User.objects.get(id=request.user.id)
        data = {
            "cash": user.cash,
            "points": user.points
        }
        print(f"{user.id} | {user.points}")
        return JsonResponse(data, safe=False)


@login_required
@csrf_exempt
def logChoice(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print(f"*****data: {data}********")
        user = User.objects.get(id=request.user.id)
        chart = data.get("chart")
        if chart == "hardTotal":
            newHT = HardTotal(user=user, hard_total=data.get(
                "player"), dealer_up=data.get("dU"), correct=data.get("correct"))
            newHT.save()
            return JsonResponse({"message": "hard total captured successfully."}, status=201)
        elif chart == "softTotal":
            newST = SoftTotal(user=user, not_ace=data.get(
                "player"), dealer_up=data.get("dealer_up"), correct=data.get("correct"))
            newST.save()
            return JsonResponse({"message": "soft total captured successfully."}, status=201)
        elif chart == "pairs":
            newPair = Pair(user=user, pair=data.get(
                "player"), dealer_up=data.get("dU"), correct=data.get("correct"))
            newPair.save()
            return JsonResponse({"message": "pair captured successfully."}, status=201)
        else:
            print("no such chart....")


@login_required
@csrf_exempt
def logHand(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print(f"*****data: {data}********")
        user = User.objects.get(id=request.user.id)
        newHand = Hand(user=user, win=data.get("win"),
                       blackjack=data.get("blackjack"))
        newHand.save()
        return JsonResponse({"message": "hand captured successfully."}, status=201)


@login_required
@csrf_exempt
def updateCashPoints(request):
    if request.method == "PUT":
        data = json.loads(request.body)
        print(f"*****update cash points data: {data}********")
        user = User.objects.get(id=request.user.id)
        user.cash = data.get("cash")
        user.points = data.get("points")
        user.save()
        return JsonResponse({"message": "points and cash updated successfully"}, status=201)
