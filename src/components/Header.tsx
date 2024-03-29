import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import profilePic from "../assets/me.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="profile">
        <div className="photo">
          <img src={profilePic} alt="Alan Jones" className="profile-pic"></img>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/almjones/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin size={40} />
          </a>
          <a
            href="https://github.com/aljones1816"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub size={40} />
          </a>

          <a href="mailto:me@alanjones.dev">
            <IconMail size={40} />
          </a>
        </div>
      </div>

      <div className="title">
        <h1>Alan Jones</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I develop thoughtful web software to create enriching user
          experiences.
        </p>
      </div>
    </div>
  );
};

export default Header;
