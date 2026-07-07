from services.pdf_service import extract_text
from services.groq_service import generate_summary


def summarize_pdf(pdf_path):

    text = extract_text(pdf_path)

    summary = generate_summary(text)

    return summary