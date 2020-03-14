from config import app
from controller_functions import landing, about_me#, send_email

app.add_url_rule("/", view_func=landing)
app.add_url_rule("/about_me", view_func=about_me)
# app.add_url_rule("/send_form_email.php", view_func=send_email, methods = ["POST"])


# app.add_url_rule("/create_account", view_func=create_account_page)
# app.add_url_rule("/add_user", view_func=add_user, methods = ["POST"])