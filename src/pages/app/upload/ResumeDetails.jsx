import React, { useState  , useRef} from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';

const ResumeDetails = ({ details, onProceed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(details);
  const toast = useRef(null);

  const nav = useNavigate()

  const handleChange = (e) => {


    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async() => {
    setIsEditing(false);
    // Save "Technologies" and "Education" to localStorage
    localStorage.setItem("Technologies", formData.Technologies);
    localStorage.setItem("Education", formData.Education);
    toast.current.show({severity:'success', summary: 'Success', detail:'Saved Successfully', life: 3000});

    await new Promise(resolve => setTimeout(resolve, 2000));


    nav('/student/screening')
    console.log("Saved data:", formData);
  };

  return (
    <div className="p-8 rounded-lg border border-gray-600 bg-gray-900 text-white mx-auto my-12 w-full md:w-4/5 lg:w-3/4 relative">
      <h2 className="text-3xl font-bold mb-6 border-b pb-3 text-center uppercase tracking-wide text-gray-200">
        Resume Details
      </h2>


      
      <Toast ref={toast} />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <strong className="block mb-1 text-gray-400">Name:</strong>
          {isEditing ? (
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
          ) : (
            <span>{formData.Name}</span>
          )}
        </div>
        <div>
          <strong className="block mb-1 text-gray-400">Address:</strong>
          {isEditing ? (
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
          ) : (
            <span>{formData.Address}</span>
          )}
        </div>
        <div>
          <strong className="block mb-1 text-gray-400">Email:</strong>
          {isEditing ? (
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
          ) : (
            <a href={`mailto:${formData.Email}`} className="text-blue-400">
              {formData.Email}
            </a>
          )}
        </div>
        <div>
          <strong className="block mb-1 text-gray-400">Phone:</strong>
          {isEditing ? (
            <input
              type="tel"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
          ) : (
            <a href={`tel:${formData.Phone}`} className="text-blue-400">
              {formData.Phone}
            </a>
          )}
        </div>
        <div>
          <strong className="block mb-1 text-gray-400">Education:</strong>
          {isEditing ? (
            <textarea
              name="Education"
              value={formData.Education}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
          ) : (
            <p>{formData.Education}</p>
          )}
        </div>
        <div>
          <strong className="block mb-1 text-gray-400">Technologies:</strong>
          {isEditing ? (
            <textarea
              name="Technologies"
              value={formData.Technologies}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
          ) : (
            <p>{formData.Technologies}</p>
          )}
        </div>
      </div>

      {/* Edit/Save and Proceed buttons */}
      <br />
      <br />
      <br />
      <div className="absolute bottom-8 right-8 flex space-x-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
          >
            Edit
          </button>
        )}
        <button
          onClick={()=>{
            handleSave()
            
          }}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default ResumeDetails;
