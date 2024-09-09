import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import File from "./File";
// import SkeletonLoader from "./SkeletonLoader";  // Import SkeletonLoader
import SkeletonLoader from "../../../components/Skleton/SkletonUpload";
const Upload = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    name: "",
    fatherName: "",
    age: "",
    graduationYear: "",
    degree: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);  // Manage loading state

  // Check if all fields are filled and files are uploaded
  const isFormValid = () => {
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    const isFileUploaded = uploadedFiles.length > 0;
    return allFieldsFilled && isFileUploaded;
  };

  const handleFilesUploaded = (files) => {
    setUploadedFiles(files);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;

    setLoading(true);  // Start loading

    const formDataToSend = new FormData();
    
    // Append form fields to the FormData object
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    
    // Append the first file to the FormData object
    if (uploadedFiles.length > 0) {
      formDataToSend.append('file', uploadedFiles[0]);
    }

    try {
      const response = await fetch("https://dynamic-pdf-8oh8.onrender.com/upload", {
        method: "POST",
        body: formDataToSend,
      });

      const responseData = await response.json();
      console.log('File uploaded successfully:', responseData);

    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    } finally {
      setLoading(false);  // End loading
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      {loading ? (
        <SkeletonLoader />  // Show skeleton loader when loading
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Upload Your Information
          </h1>

          <form className="space-y-6 w-full">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="text-white block mb-2">College Name</label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="text-white block mb-2">Father's Name</label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="text-white block mb-2">Graduation Year</label>
                <div className="relative">
                  <input
                    type="number"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-indigo-500"
                  />
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="text-white absolute top-3 right-4"
                  />
                </div>
              </div>

              <div>
                <label className="text-white block mb-2">Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <File onFilesUploaded={handleFilesUploaded} />

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className={`w-full py-2 rounded-lg transition-colors ${
                isFormValid()
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-gray-500 text-gray-300 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Upload;
