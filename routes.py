from config import app
from controller_functions import landing

app.add_url_rule("/", view_func=landing)

# app.add_url_rule("/create_account", view_func=create_account_page)
# app.add_url_rule("/add_user", view_func=add_user, methods = ["POST"])