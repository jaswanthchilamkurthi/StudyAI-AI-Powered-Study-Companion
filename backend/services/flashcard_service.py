from services.groq_service import client


def generate_flashcards(text):

    prompt = f"""
Generate 15 flashcards.

Format:

Q:
A:

Keep answers short.

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