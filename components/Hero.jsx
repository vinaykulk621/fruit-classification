import React from "react";
import FruitsRight from "../images/Fruits_Right.png";
import FruitsLeft from "../images/Fruits_Left.png";
import Leaf from "../images/leaf.png";
import Logo from "../images/newLogo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="topPart">
          <div className="box">
            <div className="logo">
              <Image
                className="logoimg"
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className="title">
              <h1>
                FRUITS <br /> CLASSIFICATION <br /> USING CNN
              </h1>
            </div>
          </div>
          <div className="FruitsRight">
            <Image
              src={FruitsRight}
              alt="Fruits"
            />
          </div>
        </div>
        <div className="bottomPart">
          <Image
            className="FruitsLeft"
            src={FruitsLeft}
            alt="Fruits"
          />
          <Image
            className="Leaf"
            src={Leaf}
            alt="Fruits"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
