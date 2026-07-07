from services.groq_service import client


def generate_plan(text):

    prompt = f"""
You are an expert study coach.

Create a 7-day study plan.

For each day include:

Day
Topics
Estimated Study Time
Revision Tips
Practice Goal

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
        temperature=0.4
    )

    return response.choices[0].message.content