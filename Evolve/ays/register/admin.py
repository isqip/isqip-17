# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Details, Services
#from django.contrib.auth.models import User
#from django.contrib.auth.admin import UserAdmin as BaseUserAdmin 


#class RegisterInline(admin.StackedInline):
#	model=Register
#	can_delete= False
#	verbose_name_plural = 'employee'

#class UserAdmin (BaseUserAdmin):
#	inlines= (RegisterInline,)

# Register your models here.
admin.site.register(Details)
admin.site.register(Services)
#admin.site.unregister(User)
#admin.site.register(User, UserAdmin)