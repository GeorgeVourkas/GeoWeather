import sunIcon from "../assets/sunIcon.png"; 
import "../styles/header.css"
export default function Header() {
  return (
    <header className="header">
      <img src={sunIcon} alt="Sun Icon" />
      <h1>GeoWeather</h1>
    </header>

  );
}
