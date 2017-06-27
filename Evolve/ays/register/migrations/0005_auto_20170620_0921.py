# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-20 09:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0004_auto_20170620_0418'),
    ]

    operations = [
        migrations.CreateModel(
            name='Search',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('your_name', models.CharField(max_length=15)),
                ('phone_no', models.CharField(max_length=12)),
                ('category_of_help', models.CharField(choices=[['elec', 'elec'], ['plumb', 'plumb'], ['tutorial', 'tutorial']], max_length=1)),
                ('district', models.CharField(choices=[['Trivandrum', 'Trivandrum'], ['Kollam', 'Kollam'], ['Pathanamthitta', 'Pathanamthita'], ['Alapuzha', 'Alapuzha'], ['Kottayam', 'Kottayam'], ['Idukki', 'Idukki'], ['Ernakulam', 'Ernakulam']], max_length=1)),
            ],
        ),
        migrations.AlterField(
            model_name='details',
            name='district',
            field=models.CharField(choices=[['Trivandrum', 'Trivandrum'], ['Kollam', 'Kollam'], ['Pathanamthitta', 'Pathanamthita'], ['Alapuzha', 'Alapuzha'], ['Kottayam', 'Kottayam'], ['Idukki', 'Idukki'], ['Ernakulam', 'Ernakulam']], max_length=1),
        ),
        migrations.AlterField(
            model_name='details',
            name='state',
            field=models.CharField(choices=[['Kerala', 'Kerala']], max_length=1),
        ),
    ]
