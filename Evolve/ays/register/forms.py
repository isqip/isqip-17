from django import forms
from .models import Details, Services, Search
from django.contrib.auth.models import User 
from django.contrib.auth.forms import UserCreationForm



class RegisterForm(UserCreationForm):
	email= forms.EmailField(required=True)
	class Meta:
		model = User
		fields=['username',
				'first_name',
				'last_name',
				'email',
				'password1',
				'password2']

	def save(self, commit= True):
		user= super(RegisterForm, self).save(commit=False)
		user.first_name = self.cleaned_data['first_name']
		user.second_name = self.cleaned_data['last_name']
		user.email = self.cleaned_data['email']

		if commit:
			user.save()

		return 	user 





class DetailsForm(forms.ModelForm):
	class Meta:
			model=Details
			fields = [
				'house_name',
				'street_name',
				'city',
				'district',
				'state',
				'phone_no',
				'aadhar_no',
				'birth_date',
				'pan_no']


class ServicesForm(forms.ModelForm):
	class Meta:
			model=Services
			fields=[
			'category',
			'description',
			'experience',
			'pay_range',
			'flexible'
			]


class SearchForm(forms.ModelForm):
	class Meta:
		model=Search
		fields=['your_name','phone_no','category_of_help','district']
