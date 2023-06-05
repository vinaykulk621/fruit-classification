"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Img from "@/images/img.png";

function FileUploadButton() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    console.log("Submitting");
    event.preventDefault();
    // Perform the API request to submit the image
    if (selectedImage) {
      // Replace 'apiEndpoint' with the actual API endpoint
      fetch("apiEndpoint", {
        method: "POST",
        body: selectedImage,
        headers: {
          "Content-Type": "image/*",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the API response data
          console.log(data);
        })
        .catch((error) => {
          // Handle the API request error
          console.error(error);
        });
    }
  };

  return (
    <>
      <button
        className="uploadButton"
        onClick={handleClick}>
        {selectedImage ? (
          <>
            <div className="preview">
              <h1>Selected Image</h1>
              <Image
                src={selectedImage}
                className="previewImage"
                alt="Selected"
                width={300}
                height={300}
              />
            </div>
          </>
        ) : (
          <>
            <Image
              src={Img}
              className="imageIcons"
              alt="upload Image"
            />
            <h2 className="finalUpload">Let&apos;s find out!</h2>
            <p className="usageInfo">Click here to add an image</p>
          </>
        )}
      </button>
      <input
        type="file"
        onChange={handleFileSelect}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <button
        type="submit"
        className="btn trynow"
        onClick={handleSubmit}>
        Identify!
      </button>
    </>
  );
}

export default FileUploadButton;
