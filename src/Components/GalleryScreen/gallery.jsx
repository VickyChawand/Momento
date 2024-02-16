import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectFirestore } from "../../firebase";
import { motion } from "framer-motion";
import Modal from "../Modal/modal";
import "./galleryScreen.css";

function GalleryScreen() {
  const [memories, setMemories] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);
  

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const snapshot = await projectFirestore.collection("images").get();
        const memoriesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMemories(memoriesData);
      } catch (error) {
        console.error("Error fetching images from Firestore:", error);
      }
    };

    fetchMemories();
  }, []);

  const handleThumbnailClick = (memory) => {
    setSelectedMemory(memory);
  };
  

  const handleDelete = async () => {
    if (!selectedMemory) return;

    try {
      await projectFirestore
        .collection("images")
        .doc(selectedMemory.id)
        .delete();

      setMemories((prevMemories) =>
        prevMemories.filter((memory) => memory.id !== selectedMemory.id)
      );

      setSelectedMemory(null);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleCloseDetails = () => {
    setSelectedMemory(null);
  };

  return (
    <div>
      <div className="g-header">
        <h2>Gallery</h2>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div className="img-container">
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            onClick={() => handleThumbnailClick(memory)}
          >
            <div className="img-box">
              <img src={memory.url} alt={memory.title} />
              <div className="img-info">
                <h2>{memory.title}</h2>
                <p>{memory.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedMemory && (
        <Modal
        selectedMemory={selectedMemory}
        handleClose={handleCloseDetails}
        handleDelete={handleDelete}
        memories={memories}
        setMemories={setMemories}
      />
      
      )}
    </div>
  );
}

export default GalleryScreen;