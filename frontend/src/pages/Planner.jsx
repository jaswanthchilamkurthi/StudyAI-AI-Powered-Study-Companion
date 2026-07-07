import { useState } from "react";
import API from "../services/api";
import ReactMarkdown from "react-markdown";

export default function Planner() {

    const [plan, setPlan] = useState("");
    const [loading, setLoading] = useState(false);

    async function generatePlan() {

        const filename = localStorage.getItem("uploadedFile");

        if (!filename) {
            alert("Please upload a file first.");
            return;
        }

        try {

            setLoading(true);

            const res = await API.post("/planner", {
                filename
            });

            setPlan(res.data.plan);

        }

        catch (err) {

            console.log(err);

            alert("Study Plan Generation Failed");

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
                📅 AI Study Planner
            </h1>

            <p
                style={{
                    color: "#666",
                    marginBottom: "25px"
                }}
            >
                Create a personalized AI study schedule from your uploaded material.
            </p>

            <button
                onClick={generatePlan}
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
                {loading ? "Generating..." : "Generate Study Plan"}
            </button>

            <br /><br />

            {plan && (

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
                        {plan}
                    </ReactMarkdown>

                </div>

            )}

        </div>

    );

}