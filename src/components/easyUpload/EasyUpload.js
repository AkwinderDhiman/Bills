import React, { useState } from "react";
import "./EasyUpload.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const EasyUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [copied, setCopied] = useState(null);
  const [activeTab, setActiveTab] = useState("Receipts");

  const emails = {
    single: "abc.single@gmail.com",
    multiple: "abc.multiple@gmail.com",
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : null);
  };

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(email);
    setTimeout(() => {
      if (copied === email) setCopied(null);
    }, 2000);
  };

  const handleAddReceipt = () => {
    if (selectedFile) {
      alert(`Receipt "${selectedFile}" added successfully!`);
    } else {
      alert("Please select a file before adding a receipt.");
    }
  };

  return (
    <div className="container">
      <nav>
        <span className="logo">EasyUpload</span>
        <div className="tabs">
          <button
            className={`tab ${activeTab === "Bills" ? "active" : ""}`}
            onClick={() => setActiveTab("Bills")}
          >
            Bills
          </button>
          <button
            className={`tab ${activeTab === "Receipts" ? "active" : ""}`}
            onClick={() => setActiveTab("Receipts")}
          >
            Receipts
          </button>
          <button
            className={`tab ${activeTab === "Bank" ? "active" : ""}`}
            onClick={() => setActiveTab("Bank")}
          >
            Bank
          </button>
        </div>
        <button className="close-btn">✖</button>
      </nav>

      <div className="content">
        <div className="owner">
          <div className="section">
            <p className="light-clr">Document Owner</p>
            <p> <strong>Accountant 01</strong></p>
          </div>

          <div className="section">
            <p className="light-clr">Client</p>
            <select id="clientSelect" className="light-clr">
              <option>Select Client</option>
              <option value="client1">Client 1</option>
              <option value="client2">Client 2</option>
            </select>
          </div>
        </div>
        <hr></hr>
        <div className="upload-box">
          <label className="upload-area" htmlFor="fileInput">
            <input type="file" id="fileInput" onChange={handleFileChange} hidden />
            <div className="upload-content">
              <div className="icon-box">
                <CloudUploadIcon className="upload-icon" />
              </div>
              <div className="text-box">
                <p>
                  <strong>Drag & Drop or <span>Choose file</span> to upload</strong>
                </p>
                <p className="file-types">JPG, PNG, PDF, CVS</p>
              </div>
            </div>
          </label>
          {selectedFile && <p className="file-name">Selected: {selectedFile}</p>}
        </div>

        <button className="btn" onClick={handleAddReceipt}>Add Receipt</button>

        <div className="email-section">
          <span className="light-clr">Send Over Email</span>
          <div className="email-item">
            <span>
              <strong>Single:</strong> <span className="email">{emails.single}</span>
            </span>
            <Tooltip title={copied === emails.single ? "Copied!" : "Copy"}>
              <IconButton onClick={() => copyToClipboard(emails.single)}>
                <ContentCopyIcon className="copy-icon" />
              </IconButton>
            </Tooltip>
          </div>
          <div className="email-item">
            <span>
              <strong>Multiple:</strong> <span className="email">{emails.multiple}</span>
            </span>
            <Tooltip title={copied === emails.multiple ? "Copied!" : "Copy"}>
              <IconButton onClick={() => copyToClipboard(emails.multiple)}>
                <ContentCopyIcon className="copy-icon" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyUpload;
