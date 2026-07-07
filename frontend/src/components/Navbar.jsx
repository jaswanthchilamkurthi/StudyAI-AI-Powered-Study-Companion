import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (

        <nav
            style={{
                background: "#800020",
                color: "white",
                padding: "18px 35px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 3px 12px rgba(0,0,0,.15)"
            }}
        >

            <h2
                style={{
                    margin: 0,
                    fontWeight: "700"
                }}
            >
                📚 StudyAI
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "25px"
                }}
            >

                <NavLink to="/" style={linkStyle}>Home</NavLink>

                <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>

            </div>

        </nav>

    );

}

const linkStyle = {

    color: "white",
    textDecoration: "none",
    fontWeight: "600"

};