from flask import Blueprint, request, jsonify
import os

from services.pdf_service import extract_text
from services.quiz_service import generate_quiz

quiz_bp = Blueprint("quiz", __name__)

UPLOAD_FOLDER = "uploads"


@quiz_bp.route("/quiz", methods=["POST"])
def quiz():

    data = request.json

    if not data:
        return jsonify({"error": "No JSON"}), 400

    filename = data.get("filename")

    if not filename:
        return jsonify({"error": "Filename missing"}), 400

    pdf_path = os.path.join(UPLOAD_FOLDER, filename)

    if not os.path.exists(pdf_path):
        return jsonify({"error": "File not found"}), 404

    text = extract_text(pdf_path)

    quiz = generate_quiz(text)

    return jsonify({
        "quiz": quiz
    })