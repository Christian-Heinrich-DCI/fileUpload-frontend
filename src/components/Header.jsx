import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <header>
      <figure className="logo">LOGO</figure>
      <ul
        className="nav"
        style={{ display: showMobileNav ? "none" : undefined }}
      >
        <li>
          <a href="/">Menü</a>
        </li>
        <li>
          <a href="/">Menü 2</a>
        </li>
        <li>
          <a href="/">Menü 3</a>
        </li>
        <li>
          <a href="/">Menü 4</a>
        </li>
        <li>
          <a href="/">Menü 5</a>
        </li>
      </ul>
      <button
        className="btnMobileMenu"
        onClick={() => {
          setShowMobileNav(!showMobileNav);
        }}
      >
        =
      </button>
    </header>
  );
};
