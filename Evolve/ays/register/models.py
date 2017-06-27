# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
#from django.contrib.auth.models import User 
#from django.contrib.auth.forms import UserCreationForm


# Create your models here.
class Details(models.Model):
	house_name = models.CharField(max_length=25)
	street_name = models.CharField(max_length=25)
	city = models.CharField(max_length=15)
	district = models.CharField(max_length=1,choices=
		[['Trivandrum','Trivandrum'],
		['Kollam','Kollam'],
		['Pathanamthitta','Pathanamthita'],
		['Alapuzha','Alapuzha'],
		['Kottayam','Kottayam'],
		['Idukki','Idukki'],
		['Ernakulam','Ernakulam']]
		)
	state = models.CharField(max_length=1,choices=
		[['Kerala','Kerala']])
	phone_no = models.CharField(max_length=14)
	aadhar_no= models.CharField(max_length=20)
	birth_date = models.DateField(null=True, blank=True)
	pan_no = models.CharField(max_length=15)

	def __unicode__ (self):
		return self.Name


class Services(models.Model):
	category= models.CharField(max_length=1, choices=
		[['elec','elec'],
		['electrical','electrical']
		]
		)
	description= models.TextField()
	experience= models.CharField(max_length=1,choices=
		[['amatei','amat'],
		['pro','pro']]
		)
	pay_range = models.CharField(max_length=1,choices=
		[['100-1000','100-1000']]
		)
	flexible= models.BooleanField()


class Search(models.Model):
	your_name= models.CharField(max_length=15)
	phone_no= models.CharField(max_length=12)
	category_of_help= models.CharField(max_length=1, choices=
		[['elec','elec'],
		['plumb','plumb'],
		['tutorial','tutorial']]
		)
	district = models.CharField(max_length=1,choices=
		[['Trivandrum','Trivandrum'],
		['Kollam','Kollam'],
		['Pathanamthitta','Pathanamthita'],
		['Alapuzha','Alapuzha'],
		['Kottayam','Kottayam'],
		['Idukki','Idukki'],
		['Ernakulam','Ernakulam']]
		)


