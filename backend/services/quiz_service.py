from services.groq_service import client


def generate_quiz(text):

    prompt = f"""
You are an expert teacher.

Generate 10 multiple-choice questions from the study material.

Format EXACTLY like this:

Q1. Question?

A. Option
B. Option
C. Option
D. Option

Answer: B

Repeat for all 10 questions.

Study Material:

{text[:12000]}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3,
    )

    return response.choices[0].message.content