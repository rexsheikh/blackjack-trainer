
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("blackjack", views.blackjack, name="blackjack"),
    # API routes
    path("blackjack/playerInfo", views.playerInfo, name="playerInfo"),
    path("blackjack/logChoice", views.logChoice, name="logChoice"),
    path("blackjack/logHand", views.logHand, name="logHand"),
    path("blackjack/updateCashPoints",
         views.updateCashPoints, name="updateCashPoints"),
    path("menu/getHeatMaps", views.getHeatmaps, name="getHeatMaps"),

]
