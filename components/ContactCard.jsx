import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import mail from "../images/mail.png";
import Image from "next/image";
import Link from "next/link";

const ContactCard = ({
  name,
  githublink,
  linkedinlink,
  photo,
  instagramlink,
  maillink,
}) => {
  return (
    <>
      <div className="DevButton">
        <Image
          src={photo}
          alt="upload button"
          className="devPics"
        />
        <h2 className="name">{name}</h2>
        <p className="socialDiv">
          <Link
            href={githublink}
            target="_blank">
            <Image
              className="socialIcon"
              src={github}
              alt="Github"
            />
          </Link>
          <Link
            href={linkedinlink}
            target="_blank">
            <Image
              className="socialIcon"
              src={linkedin}
              alt="linkedin"
            />
          </Link>
          <Link
            href={instagramlink}
            target="_blank">
            <Image
              className="socialIcon"
              src={instagram}
              alt="instagram"
            />
          </Link>
          <Link
            href={`mailto:${maillink}`}
            target="_blank">
            <Image
              className="socialIcon"
              src={mail}
              alt="mail"
            />
          </Link>
        </p>
      </div>
    </>
  );
};

export default ContactCard;
