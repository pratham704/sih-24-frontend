import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../api/BaseUrl";

const NewThreadModal = ({ isOpen, onClose, onThreadCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const stdToken = localStorage.getItem("stdToken");
      await axios.post(
        `${baseUrl}/api/forum`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${stdToken}`
          }
        }
      );
      onThreadCreated();
      onClose();
    } catch (error) {
      console.error("There was an error creating the thread!", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl mb-4">Create New Thread</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Content</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 px-4 py-2 bg-red-600 text-white rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewThreadModal;
