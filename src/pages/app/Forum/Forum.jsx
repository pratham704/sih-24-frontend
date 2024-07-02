import React, { useEffect, useState } from "react";
import { FaCommentDots, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import NewThreadModal from "./NewThreadModal"; // Adjust the import path as needed
import { baseUrl } from "../../../api/BaseUrl";
import { useNavigate } from "react-router-dom";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex items-center justify-between border-b border-gray-700 py-4">
      <div className="flex items-center space-x-4">
        <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
        <div className="flex flex-col">
          <div className="h-4 bg-gray-600 rounded w-48 mb-2"></div>
          <div className="h-3 bg-gray-600 rounded w-24"></div>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-400">
        <span className="h-3 bg-gray-600 rounded w-16"></span>
        <span className="h-3 bg-gray-600 rounded w-16"></span>
        <span className="h-3 bg-gray-600 rounded w-16"></span>
        <FaArrowRight className="text-blue-400" />
      </div>
    </div>
  );
};

const Forum = () => {
  const nav = useNavigate();
  const [threads, setThreads] = useState([]);
  const [filteredThreads, setFilteredThreads] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterOption, setFilterOption] = useState("Recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingThreads, setIsLoadingThreads] = useState(true);
  const [isLoadingCreateThread, setIsLoadingCreateThread] = useState(false);

  useEffect(() => {
    getAllThreads();
  }, []);

  useEffect(() => {
    filterThreads(filterOption, searchTerm);
  }, [threads, filterOption, searchTerm]);

  const getAllThreads = async () => {
    setIsLoadingThreads(true);
    try {
      const stdToken = localStorage.getItem("stdToken");
      const response = await axios.get(`${baseUrl}/api/forum`, {
        headers: {
          Authorization: `Bearer ${stdToken}`,
        },
      });
      setThreads(response.data);
      setIsLoadingThreads(false);
    } catch (error) {
      console.error("There was an error fetching the threads!", error);
      setIsLoadingThreads(false);
    }
  };

  const handleThreadCreated = async (newThread) => {
    setIsLoadingCreateThread(true);
    
    try {
      const stdToken = localStorage.getItem("stdToken");
      const response = await axios.post(`${baseUrl}/api/forum`, newThread, {
        headers: {
          Authorization: `Bearer ${stdToken}`,
        },
      });
      console.log("Thread created:", response.data);
      getAllThreads(); // Refresh threads after creation
    } catch (error) {
      console.error("Error creating thread:", error);
    } finally {
      setIsLoadingCreateThread(false);
      setIsModalOpen(false); // Close modal after thread creation attempt
    }
  };

  const filterThreads = (option, term) => {
    let filtered = [...threads];
    if (term) {
      filtered = filtered.filter((thread) =>
        thread.title.toLowerCase().includes(term.toLowerCase())
      );
    }
    switch (option) {
      case "Recent":
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "Popular":
        filtered.sort((a, b) => b.views - a.views);
        break;
      case "Last Reply":
        filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        break;
      case "By Category":
        // Implement filtering by category if applicable
        break;
      default:
        break;
    }
    setFilteredThreads(filtered);
  };

  const handleChangeFilter = (option) => {
    setFilterOption(option);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-md">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-semibold">Thread Results</h1>
          <p className="text-sm text-gray-400">
            Post discussions here & become an active community member.
          </p>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Enter a topic, interesting tag or content..."
              className="w-full px-4 py-2 border border-gray-600 rounded-l-lg focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg">
              Search
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-4">
              <button
                className={`text-blue-400 font-semibold ${
                  filterOption === "Recent" ? "underline" : ""
                }`}
                onClick={() => handleChangeFilter("Recent")}
              >
                Recent
              </button>
              <button
                className={`text-gray-400 ${
                  filterOption === "Popular" ? "underline" : ""
                }`}
                onClick={() => handleChangeFilter("Popular")}
              >
                Popular
              </button>
              <button
                className={`text-gray-400 ${
                  filterOption === "Last Reply" ? "underline" : ""
                }`}
                onClick={() => handleChangeFilter("Last Reply")}
              >
                Last Reply
              </button>
              <button
                className={`text-gray-400 ${
                  filterOption === "By Category" ? "underline" : ""
                }`}
                onClick={() => handleChangeFilter("By Category")}
              >
                By Category
              </button>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => setIsModalOpen(true)}
            >
              {isLoadingCreateThread ? "Creating..." : "+ New Thread"}
            </button>
          </div>
          {isLoadingThreads ? (
            <SkeletonLoader />
          ) : (
            filteredThreads.map((thread) => (
              <div
                key={thread.id}
                className="flex items-center justify-between border-b border-gray-700 py-4 cursor-pointer"
                onClick={() => {
                  nav(`/forum/${thread.id}`);
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-blue-400">
                    <FaCommentDots />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{thread.title}</h2>
                    <p className="text-sm text-gray-400">by {thread.userId}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{thread.category}</span>
                  <span>{thread.replies} replies</span>
                  <span>{thread.views} views</span>
                  <FaArrowRight className="text-blue-400" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <NewThreadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onThreadCreated={handleThreadCreated}
      />
    </div>
  );
};

export default Forum;
