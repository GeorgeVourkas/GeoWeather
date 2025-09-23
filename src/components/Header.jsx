import searchIcon from "../assets/search.png"
export default function Header({ city, setCity }) {

  function getWeather(e) {
    e.preventDefault();
    console.log("City entered:", city);
    
    // TODO: call API

    setCity(""); // clear input
  }

  return (
    <header>  
      <form onSubmit={getWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <button type="submit">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
      <h1 id="appLogo">GeoWeather</h1>
    </header>
  );
}
