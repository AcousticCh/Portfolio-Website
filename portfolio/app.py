from flask import Flask, Blueprint


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "testing"
    
    from views import views

    app.register_blueprint(views, url_prefix="/")

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)