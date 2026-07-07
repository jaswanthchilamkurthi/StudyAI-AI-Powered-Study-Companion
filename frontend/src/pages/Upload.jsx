import FileUpload from "../components/FileUpload";

export default function Upload() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8F6F7",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#800020",
            marginBottom: "10px",
            fontSize: "34px",
            fontWeight: "700",
          }}
        >
          📄 Upload Study Material
        </h1>

        <p
          style={{
            color: "#555",
            marginBottom: "30px",
            fontSize: "17px",
          }}
        >
          Upload your PDF, DOCX or TXT file and let AI generate summaries,
          flashcards, quizzes and personalized study plans.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            borderTop: "6px solid #800020",
          }}
        >
          <FileUpload />
        </div>
      </div>
    </div>
  );
}