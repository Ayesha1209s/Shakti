from django.urls import path
from . import views



urlpatterns = [
    
    
    path('signup/user/', views.signup_user),
    path('login/user/', views.login_user),

    path('signup/officer/', views.signup_officer),
    path('login/officer/', views.login_officer),
]
