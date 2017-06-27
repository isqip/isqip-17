# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .forms import RegisterForm, DetailsForm, ServicesForm, SearchForm
from .models import Details, Services, Search
from django.contrib.auth.models import User
#from django.contrib.auth import login, authenticate	
#from django.contrib.auth.forms import UserCreationForm





# Create your views here.

def home(request):
	return render(request, 'home.html')



def allp(request):
	posts=Register.objects.all()
	data={
		'posts':posts
		}
	return render(request,'all.html',data)



def signup(request):
	if request.method == "POST" :
		form= RegisterForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('/nsignup/')
	else:
		form=RegisterForm()
	data={
			'form': form,
		}	
	return render(request, 'signup.html', data)



def nsignup(request):

	if request.method=='POST':
		details_form=DetailsForm(request.POST)
		services_form=ServicesForm(request.POST)
		if details_form.is_valid() and services_form.is_valid:
			details_form.save()
			services_form.save()
			return redirect('/profile/')
	
	else:
		details_form=DetailsForm()
		services_form=ServicesForm()
	data={
		'details_form':details_form,
		'services_form':services_form
	}
	return render(request,'nsignup.html',data)
	


def profile(request):
	data={
		'user': request.user
	}
	return render(request,'profile.html',data)


def search(request):
	if request.method=='POST':
		form=SearchForm(request.POST)
		if(form.is_valid):
			form=SearchForm(request.POST)
			form.save()
			return redirect('/result/')
	else:
		form=SearchForm()
	data={
		'form':form
	}
	return render(request,'search.html',data)






















def result(request):
	posts=Search.objects.latest(id)
	people=Details.objects.all()
	data={
	'posts':posts,
	'people' :people
	}
	return render(request,'result.html',data)





