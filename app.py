from flask import Flask, jsonify, send_from_directory
import os
from router import load_public_routes

def create_app():
    """
    Creates the app instance for the app
    """
    app = Flask(__name__, static_folder="build/static/", static_url_path="/static/")

    # A ping route to test if the app is working properly
    @app.route("/ping/")
    def ping():
        return jsonify({"status" : "OK"})

    # A favicon route
    @app.route("/favicon.ico")
    def favicon():
        return send_from_directory(
            os.path.join(app.root_path, "build"),
            'favicon.ico',
            mimetype="image/vnd.microsoft.icon"
        )

    # Register the public routes
    load_public_routes(app)

    # Return the instance of the app
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="127.0.0.1", port=8080, debug=True)