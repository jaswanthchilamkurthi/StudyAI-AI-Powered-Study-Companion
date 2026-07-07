import { NavLink } from "react-router-dom";

const menu = [

    {
        name: "🏠 Home",
        path: "/"
    },

    {
        name: "📄 Upload",
        path: "/upload"
    },

    {
        name: "📝 Summary",
        path: "/summary"
    },

    {
        name: "🃏 Flashcards",
        path: "/flashcards"
    },

    {
        name: "❓ Quiz",
        path: "/quiz"
    },

    {
        name: "📅 Planner",
        path: "/planner"
    },

    {
        name: "📊 Dashboard",
        path: "/dashboard"
    }

];

export default function Sidebar() {

    return (

        <div
            style={{
                width: "240px",
                minHeight: "100vh",
                background: "#5C0013",
                paddingTop: "25px"
            }}
        >

            {

                menu.map((item) => (

                    <NavLink

                        key={item.path}

                        to={item.path}

                        style={({ isActive }) => ({

                            display: "block",

                            padding: "16px 25px",

                            color: "white",

                            textDecoration: "none",

                            fontWeight: "600",

                            background: isActive ? "#800020" : "transparent",

                            transition: ".3s"

                        })}

                    >

                        {item.name}

                    </NavLink>

                ))

            }

        </div>

    );

}