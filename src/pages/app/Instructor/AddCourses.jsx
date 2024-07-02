import React, { useState } from "react";
import { baseUrl } from "../../../api/BaseUrl";

const AddCourses = () => {
  const [courseData, setCourseData] = useState({
    courseId: Math.floor(Math.random() * 1000) + 1,
    title: "",
    instructor: "",
    rating: 4.1,
    reviews: "16,332",
    price: "₹3099",
    bestSeller: false,
    imgUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("instToken"); // Retrieve token from local storage
      console.log(token);

      const response = await fetch(`${baseUrl}/api/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Add token as Bearer token
        },
        body: JSON.stringify({ course: courseData }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error submitting course data:", error);
    }

    console.log("Submitted course data:", courseData);
  };

  return (
    <div
      className="bg-gray-900 text-white p-6 shadow-lg"
      style={{
        minHeight: "100vh",
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructor" className="block text-sm font-medium mb-1">
            Instructor
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-1">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={courseData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imgUrl" className="block text-sm font-medium mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={courseData.imgUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={courseData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourses;
