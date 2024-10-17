import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-20" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-2xl">
        <a href="https://www.linkedin.com/in/pavan1305/" target="_blank"><FaLinkedin /> </a>
        <a href="https://github.com/pallekondapavan1305" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="pallekondapavan1305@gmail.com.com"><FaMailBulk /></a>
        </div>
    </nav>

  );
};

export default Navbar;
