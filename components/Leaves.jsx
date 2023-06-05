import React from "react";
import Leaf from "@/images/leaf.png";
import Apple from "@/images/apple.png";
import Fruit from "@/images/Fruits_Left.png";
import Image from "next/image";

const LeftLeaves = ({ count }) => {
  const divs = Array.from({ length: count }, (_, index) => (
    <div
      className="leaves"
      key={index}>
      <Image
        className="left"
        src={Leaf}
        alt="Leaf"
      />
    </div>
  ));
  return (
    <div>
      <div className="leaves">{divs}</div>
    </div>
  );
};

const RightLeaves = ({ count }) => {
  const divs = Array.from({ length: count }, (_, index) => (
    <div
      className="leaves"
      key={index}>
      <Image
        className="right"
        src={Leaf}
        alt="Leaf"
      />
    </div>
  ));
  return (
    <div>
      <div className="leaves">{divs}</div>
    </div>
  );
};

export { LeftLeaves, RightLeaves };
