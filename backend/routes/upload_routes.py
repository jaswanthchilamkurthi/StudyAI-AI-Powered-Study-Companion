from flask import Blueprint, request, jsonify
import os
import uuid

upload_bp = Blueprint("upload", __name__)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

ALLOWED_EXTENSIONS = {"pdf", "docx", "txt"}


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@upload_bp.route("/upload", methods=["POST"])
def upload_file():

    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "Empty filename"}), 400

    if not allowed_file(file.filename):
        return jsonify({"error": "Unsupported file type"}), 400

    material_id = str(uuid.uuid4())

    filename = material_id + "_" + file.filename

    filepath = os.path.join(UPLOAD_FOLDER, filename)

    file.save(filepath)

    return jsonify({
        "status": "success",
        "material_id": material_id,
        "saved_filename": filename,
        "original_filename": file.filename,
        "path": filepath
    })