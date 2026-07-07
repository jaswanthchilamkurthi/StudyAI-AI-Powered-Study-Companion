import { useNavigate } from "react-router-dom";

export default function DashboardCard({ title, description, path }) {

    const navigate = useNavigate();

    return (

        <div

            style={{

                background: "white",

                padding: "25px",

                borderRadius: "18px",

                boxShadow: "0 8px 20px rgba(0,0,0,.08)",

                borderTop: "6px solid #800020"

            }}

        >

            <h2
                style={{
                    color: "#800020"
                }}
            >
                {title}
            </h2>

            <p
                style={{
                    color: "#666",
                    marginTop: "10px"
                }}
            >
                {description}
            </p>

            <button

                onClick={() => navigate(path)}

                style={{

                    marginTop: "20px",

                    background: "#800020",

                    color: "white",

                    border: "none",

                    padding: "12px 22px",

                    borderRadius: "10px",

                    cursor: "pointer",

                    fontWeight: "bold"

                }}

            >

                Open

            </button>

        </div>

    );

}