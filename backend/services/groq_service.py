import os
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_summary(text):

    prompt = f"""
Summarize the following study material.

Keep the explanation simple.

Give:
• Key Concepts
• Important Points
• Short Summary

{text[:12000]}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content