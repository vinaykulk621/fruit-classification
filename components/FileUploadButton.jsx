"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Img from "@/images/img.png";
import * as tf from "@tensorflow/tfjs";
import { useRouter } from "next/navigation";

function imgToTensor() {
  const imageElement = document.getElementById("fruit_image");
  const targetWidth = 224; // Set the desired target width for resizing
  const targetHeight = 224; // Set the desired target height for resizing
  const imageTensor = tf.browser.fromPixels(imageElement);
  const preprocessedImage = imageTensor
    .resizeBilinear([targetWidth, targetHeight])
    .toFloat()
    .div(255);
  const inputTensor = preprocessedImage.expandDims();
  console.log("inputTensor", inputTensor);
  return inputTensor;
}

async function predict() {
  console.log("predicting");
  // const modelPath = "/models/model.json";
  const model = await tf.loadLayersModel(
    "https://lxpvudvqfvttinrfcjmq.supabase.co/storage/v1/object/public/model/model.json"
  );
  const inputTensor = imgToTensor();
  console.log("model acquired");
  const predictions = model.predict(inputTensor);

  console.log("model predicted");
  const predictedClassIndex = predictions.argMax(1).dataSync()[0];
  const labels = [
    "apple",
    "banana",
    "beetroot",
    "bell pepper",
    "cabbage",
    "capsicum",
    "carrot",
    "cauliflower",
    "chilli pepper",
    "corn",
    "cucumber",
    "eggplant",
    "garlic",
    "ginger",
    "grapes",
    "jalepeno",
    "kiwi",
    "lemon",
    "lettuce",
    "mango",
    "onion",
    "orange",
    "paprika",
    "pear",
    "peas",
    "pineapple",
    "pomegranate",
    "potato",
    "raddish",
    "soy beans",
    "spinach",
    "sweetcorn",
    "sweetpotato",
    "tomato",
    "turnip",
    "watermelon",
  ];
  const predictedLabel = labels[predictedClassIndex];
  return predictedLabel;
}

function FileUploadButton() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedImage) {
      const fruit = await predict();
      console.log(fruit);
      // router.push("/results");
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
                id="fruit_image"
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
