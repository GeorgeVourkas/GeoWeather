import React, { useState } from 'react';
import './style.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch weather from your backend
  const getWeather = async (e) => {
    e.preventDefault(); // prevent page reload on form submit

    if (!city.trim()) {
      alert('Please enter a city');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      // Call your backend
      const response = await fetch(`http://localhost:5000/weather?city=${city}`);
      const data = await response.json(); 

      if (data.cod === 200) {
        setWeather(data);
        console.log(data)
      } else {
        setError(data.message || 'City not found');
      }
    } catch (err) {
      console.error(err);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>

      <form onSubmit={getWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && weather.sys && weather.main && weather.weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
