from flask import Flask

from .api import api_bp
from .config import Config
from .utils.logging import configure_logging


def create_app(config_class: type[Config] = Config) -> Flask:
    app = Flask(__name__)
    app.config.from_object(config_class)

    configure_logging(app)
    app.register_blueprint(api_bp)

    return app

