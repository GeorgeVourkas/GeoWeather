import React, { useEffect, useState } from "react";
import CityInfoBlock from "./CityInfoBlock";
import favoriteCities from "../favorites";

export default function PopularCities() {
  const [citiesWeather, setCitiesWeather] = useState([]);

  useEffect(() => {
    async function fetchWeather() {
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      if (!apiKey){
        console.error("OpenWeather API key not found!");
        return;
      }

      try {
        const promises = favoriteCities.map(async (city) => {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );
          return res.json();
        });

        const results = await Promise.all(promises);
        setCitiesWeather(results);
      } catch (err) {
        console.error("Error fetching weather for favorite cities:", err);
      }
    }

    fetchWeather();
  }, []);

  return (
    <section className="popularSection">
      {citiesWeather.map((cityData) => (
        <CityInfoBlock key={cityData.id} cityData={cityData} />
      ))}
    </section>
  );
}
