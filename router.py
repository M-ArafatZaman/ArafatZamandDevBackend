from flask import Blueprint, Flask, send_from_directory
import os

def load_public_routes(app: Flask):
    """
    Function to load each public routes
    """

    # Registered the logo files
    @app.route("/logo192.png")
    def logo192():
        return send_from_directory( os.path.join(app.root_path, "build"), "logo192.png" )

    @app.route("/logo512.png")
    def logo512():
        return send_from_directory( os.path.join(app.root_path, "build"), "logo512.png" )

    # Register the resume
    @app.route("/resume.pdf")
    def resume():
        return send_from_directory( os.path.join(app.root_path, "build"), "resume.pdf" )

def load_model_routes(app: Flask):
    """
    Function to load all the model related routes
    """
    model_routes = Blueprint("models", __name__, static_folder="build/models/", static_url_path="/models/")
    
    app.register_blueprint(model_routes)