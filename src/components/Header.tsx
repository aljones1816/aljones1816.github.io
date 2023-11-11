import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import profilePic from "../assets/me.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>Alan Jones</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I develop thoughtful web software to create enriching user
          experiences.
        </p>
      </div>
      <div className="photo">
        <img src={profilePic} alt="Alan Jones" className="profile-pic"></img>
      </div>
      <div className="socials">
        <a href="https://github.com/aljones1816">
          <IconBrandGithub size={36} />
        </a>
        <a href="https://www.linkedin.com/in/almjones/">
          <IconBrandLinkedin size={36} />
        </a>
        <a href="mailto:me@alanjones.dev">
          <IconMail size={36} />
        </a>
      </div>
    </div>
  );
};

export default Header;
