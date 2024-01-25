import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addImage.css";
import useStorage from "../hooks/useStorage";
import Card from "../assests/card-img.png";

function AddMemoriesCard({ onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const { progress, error } = useStorage(image, title, description, onClose);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = () => {
    if (!title || !description || !image) {
      const notify = () => toast("Please enter valid data");
      notify();
      return;
    }
    if (progress !== 100) {
      const notify = () => toast("Image is still uploading. Please wait...");
      notify();
      return;
    }
    
    if (error) {
      console.error("Image upload error:", error);
      const notify = () => toast("Image upload failed");
      notify();
    }
  };

  return (
    <div className="add-memories-card-overlay">
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="card-h">
        <h2>Add Memories</h2>
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>
      <div className="content">
        <div className="card">
          <div className="form-item">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={!title ? "error" : ""}
            />
          </div>
          <div className="form-item">
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={!description ? "error" : ""}
            />
          </div>
          <div className="form-item">
            <label>File</label>
            <input
              type="file"
              onChange={handleImageChange}
              className={!image ? "error" : ""}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="card-img">
          <img src={Card} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AddMemoriesCard;
