import { useState } from "react";
import API from "../services/api";
import ReactMarkdown from "react-markdown";

export default function Quiz() {

    const [quiz, setQuiz] = useState("");
    const [loading, setLoading] = useState(false);

    async function generateQuiz() {

        const filename = localStorage.getItem("uploadedFile");

        if (!filename) {
            alert("Please upload a file first.");
            return;
        }

        try {

            setLoading(true);

            const res = await API.post("/quiz", {
                filename
            });

            setQuiz(res.data.quiz);

        }

        catch (err) {

            console.log(err);

            alert("Quiz Generation Failed");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div
            style={{
                maxWidth: "1000px",
                margin: "30px auto",
                background: "white",
                padding: "35px",
                borderRadius: "18px",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)"
            }}
        >

            <h1
                style={{
                    color: "#800020",
                    marginBottom: "15px"
                }}
            >
                ❓ AI Quiz Generator
            </h1>

            <p
                style={{
                    color: "#666",
                    marginBottom: "25px"
                }}
            >
                Generate AI-powered MCQs from your uploaded study material.
            </p>

            <button
                onClick={generateQuiz}
                disabled={loading}
                style={{
                    padding: "12px 28px",
                    background: loading ? "#B76E79" : "#800020",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    fontSize: "15px"
                }}
            >
                {loading ? "Generating..." : "Generate Quiz"}
            </button>

            <br /><br />

            {quiz && (

                <div
                    style={{
                        marginTop: "25px",
                        padding: "25px",
                        background: "#FAF4F5",
                        borderLeft: "6px solid #800020",
                        borderRadius: "12px",
                        lineHeight: "1.8"
                    }}
                >

                    <ReactMarkdown>
                        {quiz}
                    </ReactMarkdown>

                </div>

            )}

        </div>

    );

}