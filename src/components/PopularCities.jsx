// import React from "react"
// import CityInfoBlock from "./CityInfoBlock"
// export default function PopularCities (){
    
//     return(
//         <section className="popularSection">
//             <CityInfoBlock/>
//             <CityInfoBlock/>
//         </section>
//     )
// }

import React, { useEffect, useState } from "react";
import CityInfoBlock from "./CityInfoBlock";
import favoriteCities from "../favorites";

export default function PopularCities() {
  const [citiesWeather, setCitiesWeather] = useState([]);

  useEffect(() => {
    async function fetchWeather() {
        const apiKey = "69c7daa9223cbc43fab0367cc0f76034";

        // Fetch weather for all favorite cities
        const promises = favoriteCities.map(async (city) => {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        return res.json();
        });

      const results = await Promise.all(promises);
      setCitiesWeather(results);
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
