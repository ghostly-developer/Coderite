# Generated by Django 3.2.4 on 2021-08-08 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coderite', '0005_auto_20210807_2257'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.SlugField(default=models.CharField(max_length=250), max_length=200, unique=True),
        ),
    ]