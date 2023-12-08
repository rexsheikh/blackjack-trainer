# Generated by Django 4.2.5 on 2023-12-08 00:31

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("blackjack", "0003_softtotal_pair_hardtotal"),
    ]

    operations = [
        migrations.RenameField(
            model_name="hand",
            old_name="correct",
            new_name="win",
        ),
        migrations.RemoveField(
            model_name="hand",
            name="dealer_up",
        ),
        migrations.RemoveField(
            model_name="hand",
            name="player_a",
        ),
        migrations.RemoveField(
            model_name="hand",
            name="player_b",
        ),
        migrations.RemoveField(
            model_name="user",
            name="rank",
        ),
        migrations.AddField(
            model_name="hardtotal",
            name="correct",
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="pair",
            name="correct",
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="softtotal",
            name="correct",
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="user",
            name="points",
            field=models.IntegerField(default=0),
        ),
    ]
