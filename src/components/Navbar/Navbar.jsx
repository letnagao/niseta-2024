import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Eventos</li>
        <li>Sobre nós</li>
        <li>Galeria</li>
        <li>Depoimentos</li>
        <li>
          <button className="btn">Contato</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
