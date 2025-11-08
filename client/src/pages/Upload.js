import React, { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);
    await axios.post("http://localhost:5000/upload", formData);
    alert("Uploaded successfully!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Wallpaper</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
