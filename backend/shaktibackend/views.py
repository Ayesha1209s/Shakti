
# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import WomanUser, Officer
from django.contrib.auth.hashers import check_password
from django.shortcuts import render
 

# ---------------- WOMAN USER SIGNUP ----------------
@csrf_exempt
def signup_user(request):
    if request.method == "POST":
        name = request.POST.get("name")
        phone = request.POST.get("phone")
        email = request.POST.get("email")
        password = request.POST.get("password")

        # Add validation just in case
        if not name or not phone or not email or not password:
            return JsonResponse({"error": "All fields are required"}, status=400)

        WomanUser.objects.create(name=name, phone=phone, email=email, password=password)
        return JsonResponse({"message": "User registered successfully!"})

    return JsonResponse({"error": "Invalid request method"}, status=405)



# ---------------- WOMAN USER LOGIN ----------------
@csrf_exempt
def login_user(request):
    contact = request.POST.get('contact')  # phone or email
    password = request.POST.get('password')

    user = None
    if "@" in contact:
        user = WomanUser.objects.filter(email=contact).first()
    else:
        user = WomanUser.objects.filter(phone=contact).first()

    if user and check_password(password, user.password):  # ✅ verify hash
        return JsonResponse({"status": "success", "message": "Login Successful"})

    return JsonResponse({"status": "error", "message": "Invalid login details"})



# ---------------- OFFICER SIGNUP ----------------
@csrf_exempt
def signup_officer(request):
    full_name = request.POST.get('full_name')
    designation = request.POST.get('designation')
    rank = request.POST.get('rank')
    workplace = request.POST.get('workplace')
    badge_id = request.POST.get('badge_id')
    official_email = request.POST.get('official_email')
    phone = request.POST.get('phone')
    password = request.POST.get('password')

    if Officer.objects.filter(official_email=official_email).exists():
        return JsonResponse({"status": "error", "message": "Official email already registered"})
    if Officer.objects.filter(badge_id=badge_id).exists():
        return JsonResponse({"status": "error", "message": "Badge/ID already registered"})

    Officer.objects.create(
        full_name=full_name,
        designation=designation,
        rank=rank,
        workplace=workplace,
        badge_id=badge_id,
        official_email=official_email,
        phone=phone,
        password=password
    )

    return JsonResponse({"status": "success", "message": "Officer Signup Successful!"})


# ---------------- OFFICER LOGIN ----------------
@csrf_exempt
def login_officer(request):
    contact = request.POST.get('contact')
    password = request.POST.get('password')

    officer = None
    if "@" in contact:
        officer = Officer.objects.filter(official_email=contact).first()
    else:
        officer = Officer.objects.filter(phone=contact).first()

    if officer and check_password(password, officer.password):  # ✅ verify hash
        return JsonResponse({"status": "success", "message": "Login Successful"})

    return JsonResponse({"status": "error", "message": "Invalid login details"})
