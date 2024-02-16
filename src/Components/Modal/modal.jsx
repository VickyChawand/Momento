import React, { useState } from "react";
import { motion } from "framer-motion";
import "./modal.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoReturnUpBack } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import EditBox from "../Editbox/editbox";
import { projectFirestore } from "../../firebase";

const Modal = ({ selectedMemory, handleClose, handleDelete, memories, setMemories }) => {
  const [showEditBox, setShowEditBox] = useState(false);
  const [editedMemory, setEditedMemory] = useState(selectedMemory);

  const handleEditClick = () => {
    setShowEditBox(true);
  };

  const handleSaveEdit = async (editedTitle, editedDescription) => {
    try {
      await projectFirestore
      .collection("images").doc(selectedMemory.id).update({
        title: editedTitle,
        description: editedDescription
      });

      const updatedMemory = { ...selectedMemory, title: editedTitle, description: editedDescription };
      setEditedMemory(updatedMemory);
      setShowEditBox(false);

      // Update the memory in the local state
      setMemories(memories.map(memory => memory.id === selectedMemory.id ? updatedMemory : memory));
    } catch (error) {
      console.error("Error updating image:", error);
    }
  };

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
    >
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="modal-content"
      >
        <h2>{editedMemory.title}</h2>
        <img src={editedMemory.url} alt={editedMemory.title} />
        <p>{editedMemory.description}</p>
        <div className="modal-button">
          <button onClick={handleDelete}>
            <MdOutlineDeleteOutline />
          </button>
          <button onClick={handleClose}>
            <IoReturnUpBack />{" "}
          </button>
          <button onClick={handleEditClick}>
          <CiEdit />{" "}
          </button>
        </div>
      </motion.div>
    </motion.div>
    {showEditBox && (
      <EditBox
        selectedMemory={selectedMemory}
        handleSaveEdit={handleSaveEdit}
        handleClose={() => setShowEditBox(false)}
      />
    )}
    </>
  );
};

export default Modal;

