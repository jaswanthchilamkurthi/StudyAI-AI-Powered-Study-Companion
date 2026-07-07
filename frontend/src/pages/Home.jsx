import DashboardCard from "../components/DashboardCard";

export default function Home() {

    const cards = [

        {
            title: "📄 Upload Notes",
            description: "Upload PDFs, DOCX and TXT files.",
            path: "/upload"
        },

        {
            title: "📝 AI Summary",
            description: "Generate concise AI summaries.",
            path: "/summary"
        },

        {
            title: "🃏 Flashcards",
            description: "Create revision flashcards.",
            path: "/flashcards"
        },

        {
            title: "❓ Quiz",
            description: "Generate AI MCQ quizzes.",
            path: "/quiz"
        },

        {
            title: "📅 Study Planner",
            description: "Build a personalized study schedule.",
            path: "/planner"
        },

        {
            title: "📊 Dashboard",
            description: "View your study statistics.",
            path: "/dashboard"
        }

    ];

    return (

        <div style={{ padding: "35px" }}>

            <h1
                style={{
                    color: "#800020",
                    marginBottom: "10px"
                }}
            >
                📚 Smart AI Study Companion
            </h1>

            <p
                style={{
                    color: "#666",
                    marginBottom: "35px"
                }}
            >
                Upload your study material and let AI create summaries,
                flashcards, quizzes and personalized study plans instantly.
            </p>

            <div

                style={{

                    display: "grid",

                    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",

                    gap: "25px"

                }}

            >

                {

                    cards.map((card, index) => (

                        <DashboardCard

                            key={index}

                            title={card.title}

                            description={card.description}

                            path={card.path}

                        />

                    ))

                }

            </div>

        </div>

    );

}