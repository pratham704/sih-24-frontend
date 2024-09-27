import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faCloudUploadAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function File({ onFilesUploaded }) {
    
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);

  const onSelectFiles = (e) => {
    const files = e.target.files;
    let _totalSize = totalSize;
    const selectedFiles = Array.from(files).filter(file => file.type === "application/pdf");

    selectedFiles.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);

    // Notify the parent component
    if (onFilesUploaded) {
      onFilesUploaded(selectedFiles);
    }
  };

  const onUploadFiles = () => {
    toast.success("PDF Uploaded");
  };

  const onClearFiles = () => {
    setTotalSize(0);
  };

  const formattedSize = (size) => {
    if (size < 1000) return `${size} B`;
    else if (size < 1000000) return `${(size / 1000).toFixed(2)} KB`;
    else return `${(size / 1000000).toFixed(2)} MB`;
  };

  const progressPercentage = (size) => {
    return Math.min((size / 1000000) * 100, 100);
  };

  return (
    <div
      style={{
        backgroundColor: "#1F2937",
        borderRadius: "8px",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 12px rgba(0, 0, 0, 0.2), 0 16px 24px rgba(0, 0, 0, 0.3)",
        padding: "16px",
      }}
    >
      <ToastContainer />
      <div
        style={{
          backgroundColor: "#1F2937",
          padding: "8px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <label
            htmlFor="file-upload"
            style={{
              cursor: "pointer",
              border: "1px solid #4B5563",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "#2D3748",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </label>

          <button
            onClick={onClearFiles}
            style={{
              border: "1px solid #EF4444",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "#EF4444",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" , marginLeft:'1.5rem' }}>
          <span
            style={{ color: "white", fontSize: "0.875rem", marginRight: "8px" }}
          >
            {formattedSize(totalSize)} / 1 MB
          </span>
          <div
            style={{
              width: "8rem",
              height: "8px",
              backgroundColor: "#4B5563",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progressPercentage(totalSize)}%`,
                height: "100%",
                backgroundColor: "#10B981",
              }}
            ></div>
          </div>
        </div>
      </div>
      <input
        id="file-upload"
        type="file"
        multiple
        accept="application/pdf"
        style={{ display: "none" }}
        ref={fileUploadRef}
        onChange={onSelectFiles}
      />
    </div>
  );
}
