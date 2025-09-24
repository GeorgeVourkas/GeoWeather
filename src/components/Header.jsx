import sunIcon from "../assets/sunIcon.png"; // or .svg depending on file

export default function Header() {
  return (
    <header className="header">
      <img src={sunIcon} alt="Sun Icon" />
      <h1>GeoWeather</h1>
    </header>

  );
}
