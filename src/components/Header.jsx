import React from "react";
import sunIcon from "../assets/sunIcon.png"; 
import "../styles/header.css"
export default function Header() {
  const [scrolled, setScrolled] = React.useState(false)

  function handleScroll() {
    setScrolled(window.scrollY > 50); // true if scrolled more than 50px, false otherwise
  }
  
  window.addEventListener("scroll",handleScroll)
  return (
    <header className={`${scrolled? "scrolled":""}`} id="header">
      <img src={sunIcon} alt="Sun Icon" />
      <h1>GeoWeather</h1>
    </header>

  );
}
