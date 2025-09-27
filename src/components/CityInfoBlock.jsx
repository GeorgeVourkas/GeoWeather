

export default function CityInfoBlock({ cityData }) {
    if (!cityData || !cityData.main) return null; // safeguard if data not loaded yet
  return (
    <div className="cityInfoBlock">
      <div className="upperHalf">
        <div className="upperLeft">
          <h2>{Math.round(cityData.main.temp)}°C</h2>
          <h3>{cityData.name}</h3>
        </div>
        <div className="upperRight">
          <img className="statusImg" src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`} alt="Weather icon" />
        </div>
      </div>
      <div className="lowerHalf">
        <p className="weatherStatus">{cityData.weather[0].description}</p>
        <p className="realFeel">Real feel: {Math.round(cityData.main.feels_like)}°C</p>
      </div>
    </div>
  );
}
