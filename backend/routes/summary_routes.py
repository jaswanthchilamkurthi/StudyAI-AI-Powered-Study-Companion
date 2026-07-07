from flask import Blueprint, request, jsonify
import os

from services.summary_service import summarize_pdf

summary_bp = Blueprint("summary", __name__)

UPLOAD_FOLDER = "uploads"


@summary_bp.route("/summary", methods=["POST"])
def summary():

    data = request.json

    if not data:
        return jsonify({"error": "No JSON received"}), 400

    filename = data.get("filename")

    if not filename:
        return jsonify({"error": "Filename missing"}), 400

    pdf_path = os.path.join(UPLOAD_FOLDER, filename)

    if not os.path.exists(pdf_path):
        return jsonify({"error": "File not found"}), 404

    summary = summarize_pdf(pdf_path)

    return jsonify({
        "summary": summary
    })