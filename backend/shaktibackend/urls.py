from django.urls import path
from . import views

urlpatterns = [
    #path('', views.home, name='home'),
    
    path('signup/user/', views.signup_user),
    path('login/user/', views.login_user),

    path('signup/officer/', views.signup_officer),
    path('login/officer/', views.login_officer),
]
