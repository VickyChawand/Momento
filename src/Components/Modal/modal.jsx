import React from "react";
import { motion } from "framer-motion";
import "./modal.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoReturnUpBack } from "react-icons/io5";

const Modal = ({ selectedMemory, handleClose, handleDelete }) => {
  return (
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
        <h2>{selectedMemory.title}</h2>
        <img src={selectedMemory.url} alt={selectedMemory.title} />
        <p>{selectedMemory.description}</p>
        <div className="modal-button">
          <button onClick={handleDelete}>
            <MdOutlineDeleteOutline /> Delete
          </button>
          <button onClick={handleClose}>
            {" "}
            <IoReturnUpBack /> Back{" "}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
