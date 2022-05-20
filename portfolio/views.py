from flask import Blueprint, render_template

views = Blueprint("views", __name__)

# info and topic links
@views.route("/", methods=["GET"])
def home():
    return render_template("index.html")

# web app library
@views.route("/web", methods=["GET"])
def web_lib():
    return render_template("web_links.html")

# game library
@views.route("/games", methods=["GET"])
def game_lib():
    return render_template("game_links.html")

# bash library
@views.route("/bash", methods=["GET"])
def bash_lib():
    return render_template("bash_links.html")