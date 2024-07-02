import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../api/BaseUrl";

const SingleThread = () => {
  const { id } = useParams();
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [id]); // Fetch posts when id changes

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const stdToken = localStorage.getItem("stdToken");
      const response = await axios.get(`${baseUrl}/api/forum/${id}/posts`, {
        headers: {
          Authorization: `Bearer ${stdToken}`,
        },
      });

      // Sort posts by createdAt in descending order (most recent first)
      const sortedPosts = response.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      // Format createdAt field to DD/MM/YYYY, HH:mm:ss
      const formattedPosts = sortedPosts.map((post) => {
        const formattedDate = new Date(post.createdAt).toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        return {
          ...post,
          formattedCreatedAt: formattedDate,
        };
      });

      setPosts(formattedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    if (postContent.length < 4) {
      alert("Please enter a valid sentence ");

      return;
    }

    setIsLoading(true);
    try {
      const stdToken = localStorage.getItem("stdToken");
      const profanityCheckResponse = await axios.post(
        "http://localhost:5000/check-text",
        { text: postContent },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (profanityCheckResponse.data.result === 1) {
        setIsLoading(false);
        alert("Your post contains vulgar content. Please revise your post.");
        return;
      }

      // If no profanity detected, proceed with post creation
      const postCreationResponse = await axios.post(
        `${baseUrl}/api/forum/${id}/posts`,
        { content: postContent },
        {
          headers: {
            Authorization: `Bearer ${stdToken}`,
          },
        }
      );

      console.log("Post created:", postCreationResponse.data);
      fetchPosts();
      setPostContent(""); // Clear the input field
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-semibold mb-4">Post</h1>

      {/* Form to create a new post */}
      <form onSubmit={handlePostSubmit} className="mb-4">
        <textarea
          value={postContent}
          onChange={handleInputChange}
          placeholder="Enter your post  content..."
          rows="4"
          cols="50"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <br />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "..." : "Create Post"}
        </button>
      </form>

      {/* Displaying posts or loader */}
      {isLoading ? (
        <div className="text-center text-gray-400">Loading posts...</div>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg p-4 mb-4">
              <p className="text-gray-300">{post.content}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-500 text-sm">
                  Posted by {post.userId} on {post.formattedCreatedAt}
                </p>
                {/* Add additional details or actions here */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleThread;
