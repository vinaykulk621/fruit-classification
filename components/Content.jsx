import React from "react";
import { LeftLeaves, RightLeaves } from "./Leaves";
import Link from "next/link";

const Content = () => {
  return (
    <div className="content">
      <LeftLeaves count={3} />
      <div className="center">
        <div className="card">
          <h2 className="Question">What it does?</h2>
          <p className="Answer">
            Welcome to the &quot;Fruits Identification using CNN Algorithm&quot;
            project. This project aims to develop a robust and accurate system
            for automatically identifying different types of fruits through the
            application of Convolutional Neural Networks (CNNs). By leveraging
            the power of deep learning and image classification techniques, we
            can efficiently categorize fruits based on their visual features ...
          </p>
          <Link href={"/about"}>
            <button className="btn">More</button>
          </Link>
        </div>
        <div className="card">
          <h2 className="Question">How to Use?</h2>
          <p className="Answer">
            Very simple and easy to use.
            <br />
            <br />
            First, upload the image of the fruit you want to identify.
            <br />
            Secondly, wait for the model to predict the fruit accurately.
            <br />
            Finally, you have the result!
          </p>
          <Link href="/usage">
            <button className="btn">More</button>
          </Link>
          <Link href="/usage">
            <button className="btn trynow">Try Now !</button>
          </Link>
        </div>
      </div>
      <RightLeaves count={3} />
    </div>
  );
};

export default Content;
