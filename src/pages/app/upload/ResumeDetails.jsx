import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

const ResumeDetails = ({ details }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(details);
  localStorage.setItem("Name", details.Name || "Not Scraped");
  localStorage.setItem("Address", details.Address || "Couldnt Fetch from Pdf");
  localStorage.setItem("Email", details.Email || "Not Scraped");
  localStorage.setItem("Phone", details.Phone || "8073970294");
  localStorage.setItem("Education", details.Education || "Not Scraped");
  localStorage.setItem("Technologies", details.Technologies || "Full Stack Web developer");

  
  const toast = useRef(null);
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    setIsEditing(false);
    // Save all details to localStorage
    localStorage.setItem("Name", formData.Name);
    localStorage.setItem("Address", formData.Address);
    localStorage.setItem("Email", formData.Email);
    localStorage.setItem("Phone", formData.Phone);
    localStorage.setItem("Education", formData.Education);
    localStorage.setItem("Technologies", formData.Technologies);

    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Saved Successfully",
      life: 3000,
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    window.location.href = "/student/screening";
    console.log("Saved data:", formData);
  };

  const UploadNew = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Address");
    localStorage.removeItem("Email");
    localStorage.removeItem("Phone");
    localStorage.removeItem("Education");
    localStorage.removeItem("Technologies");
    window.location.reload();
  };

  return (
    <div className="p-8 rounded-lg border border-gray-600 bg-gray-900 text-white mx-auto my-12 w-full md:w-3/4">
      <h2 className="text-3xl font-bold mb-6 border-b pb-3 text-center uppercase tracking-wide text-gray-200">
        Resume Details
      </h2>

      <Toast ref={toast} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <strong className="block mb-1 text-gray-400">{key}:</strong>
            {isEditing ? (
              <input
                type={
                  key === "Email" ? "email" : key === "Phone" ? "tel" : "text"
                }
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white p-2 rounded"
              />
            ) : (
              <span>{formData[key]}</span>
            )}
          </div>
        ))}
      </div>

      {/* Edit/Save and Proceed buttons */}
      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
  {isEditing ? (
    <button
      onClick={handleSave}
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
    >
      Save
    </button>
  ) : (
    <button
      onClick={() => setIsEditing(true)}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
    >
      Edit
    </button>
  )}
  <button
    onClick={handleSave}
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
  >
    Proceed
  </button>
  <button
    onClick={UploadNew}
    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
  >
    Upload New Resume
  </button>
</div>

    </div>
  );
};

export default ResumeDetails;
