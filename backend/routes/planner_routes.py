from flask import Blueprint, request, jsonify
import os

from services.pdf_service import extract_text
from services.planner_service import generate_plan

planner_bp = Blueprint("planner", __name__)

UPLOAD_FOLDER = "uploads"


@planner_bp.route("/planner", methods=["POST"])
def planner():

    data = request.json

    filename = data.get("filename")

    pdf_path = os.path.join(UPLOAD_FOLDER, filename)

    if not os.path.exists(pdf_path):
        return jsonify({"error": "File not found"}), 404

    text = extract_text(pdf_path)

    plan = generate_plan(text)

    return jsonify({
        "plan": plan
    })