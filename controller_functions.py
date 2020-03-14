from flask import render_template, redirect, request#, session, flash
# from config import bcrypt, db
# from models import Users, Bands
import re   


# EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


# Home Page
def landing():
    
    return render_template("index.htm")

def about_me():
    return render_template("about_me.html")

# def send_email():
#     return 