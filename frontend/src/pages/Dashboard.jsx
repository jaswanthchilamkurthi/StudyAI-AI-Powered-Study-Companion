import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const uploaded = localStorage.getItem("uploadedFile") ? 1 : 0;

  const data = {
    labels: ["Uploads", "Summary", "Flashcards", "Quiz", "Planner"],
    datasets: [
      {
        label: "StudyAI Usage",
        data: [uploaded, 1, 1, 1, 1],
      },
    ],
  };

  return (
    <div>
      <h1>📊 Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div className="card">📄 Uploads<br /><h2>{uploaded}</h2></div>
        <div className="card">📝 Summary<br /><h2>1</h2></div>
        <div className="card">🃏 Flashcards<br /><h2>15</h2></div>
        <div className="card">❓ Quiz<br /><h2>10</h2></div>
        <div className="card">📅 Planner<br /><h2>7 Days</h2></div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <Bar data={data} />
      </div>
    </div>
  );
}