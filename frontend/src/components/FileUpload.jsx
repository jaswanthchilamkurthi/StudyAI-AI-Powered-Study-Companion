import { useState } from "react";
import API from "../services/api";

export default function FileUpload() {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [savedFilename, setSavedFilename] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e) {

        setFile(e.target.files[0]);
        setMessage("");
        setSavedFilename("");

    }

    async function uploadFile() {

        if (!file) {

            alert("Please select a file first.");
            return;

        }

        const formData = new FormData();
        formData.append("file", file);

        try {

            setLoading(true);

            const res = await API.post("/upload", formData);

            console.log(res.data);

            setSavedFilename(res.data.saved_filename);

            localStorage.setItem(
                "uploadedFile",
                res.data.saved_filename
            );

            setMessage("✅ File uploaded successfully!");

        }

        catch (error) {

            console.log(error);

            setMessage("❌ Upload Failed");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div
            style={{
                background: "white",
                padding: "35px",
                borderRadius: "18px",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)"
            }}
        >

            <h2
                style={{
                    color: "#800020",
                    marginBottom: "25px"
                }}
            >
                📄 Upload Study Material
            </h2>

            <input
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px dashed #800020",
                    borderRadius: "10px",
                    background: "#FAF4F5",
                    cursor: "pointer"
                }}
            />

            <br />
            <br />

            <button
                onClick={uploadFile}
                disabled={loading}
                style={{
                    padding: "12px 28px",
                    background: loading ? "#B76E79" : "#800020",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontSize: "15px",
                    fontWeight: "bold",
                    transition: "0.3s"
                }}
            >
                {loading ? "Uploading..." : "Upload File"}
            </button>

            <br />
            <br />

            {message && (

                <div
                    style={{
                        background:
                            message.includes("success")
                                ? "#EAF7EC"
                                : "#FDECEC",
                        color:
                            message.includes("success")
                                ? "#1B5E20"
                                : "#B71C1C",
                        padding: "12px",
                        borderRadius: "10px",
                        fontWeight: "600"
                    }}
                >
                    {message}
                </div>

            )}

            {savedFilename && (

                <div
                    style={{
                        marginTop: "20px",
                        padding: "15px",
                        background: "#F7E9EC",
                        borderLeft: "5px solid #800020",
                        borderRadius: "10px"
                    }}
                >
                    <b>Saved Filename</b>

                    <br />
                    <br />

                    <span
                        style={{
                            wordBreak: "break-all",
                            color: "#555"
                        }}
                    >
                        {savedFilename}
                    </span>

                </div>

            )}

            {file && (

                <div
                    style={{
                        marginTop: "20px",
                        background: "#FAF4F5",
                        padding: "18px",
                        borderRadius: "10px"
                    }}
                >

                    <h3
                        style={{
                            color: "#800020"
                        }}
                    >
                        📁 Selected File
                    </h3>

                    <p>
                        <b>Name:</b> {file.name}
                    </p>

                    <p>
                        <b>Size:</b> {(file.size / 1024).toFixed(2)} KB
                    </p>

                </div>

            )}

        </div>

    );

}