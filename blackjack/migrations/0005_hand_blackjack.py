# Generated by Django 4.2.5 on 2023-12-08 19:31

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("blackjack", "0004_rename_correct_hand_win_remove_hand_dealer_up_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="hand",
            name="blackjack",
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
    ]
