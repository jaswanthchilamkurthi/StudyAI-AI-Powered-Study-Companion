from flask import Blueprint, request, jsonify
import os

from services.pdf_service import extract_text
from services.flashcard_service import generate_flashcards

flashcard_bp = Blueprint("flashcards", __name__)

UPLOAD_FOLDER = "uploads"


@flashcard_bp.route("/flashcards", methods=["POST"])
def flashcards():

    data = request.json

    filename = data.get("filename")

    pdf_path = os.path.join(UPLOAD_FOLDER, filename)

    if not os.path.exists(pdf_path):
        return jsonify({"error": "File not found"}), 404

    text = extract_text(pdf_path)

    cards = generate_flashcards(text)

    return jsonify({
        "flashcards": cards
    })