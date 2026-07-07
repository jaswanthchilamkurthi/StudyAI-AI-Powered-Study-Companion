from flask import Flask
from flask_cors import CORS
from routes.flashcard_routes import flashcard_bp
from routes.quiz_routes import quiz_bp
from routes.planner_routes import planner_bp

from routes.upload_routes import upload_bp
from routes.summary_routes import summary_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(upload_bp)
app.register_blueprint(summary_bp)
app.register_blueprint(flashcard_bp)
app.register_blueprint(quiz_bp)
app.register_blueprint(planner_bp)

@app.route("/")
def home():
    return "StudyAI Backend Running"


if __name__ == "__main__":
    app.run(debug=True)