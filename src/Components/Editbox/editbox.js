// Inside editbox.js

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiSaveDown1 } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import './editbox.css';

const EditBox = ({ selectedMemory, handleSaveEdit, handleClose }) => {
  const [editedTitle, setEditedTitle] = useState(selectedMemory.title);
  const [editedDescription, setEditedDescription] = useState(selectedMemory.description);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSave = () => {
    handleSaveEdit(editedTitle, editedDescription);
  };

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="editbox-overlay"
    >
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="editbox-content"
      >
      <h1>Update Content</h1>
      <p>Title</p>
      <input type="text" value={editedTitle} onChange={handleTitleChange}/>
      <p>Description</p>
      <input type="text" value={editedDescription} onChange={handleDescriptionChange} />
      <div className="editBtn">
      <button onClick={handleSave}> <CiSaveDown1 /></button>
      <button onClick={handleClose}> <MdOutlineCancel /></button>
      </div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default EditBox;
