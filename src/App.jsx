import React from "react";
import Header from "./components/Header";
import BackgroundView from "./components/BackgroundView";
import InformationSection from "./components/InformationSection";
import PopularCities from "./components/PopularCities";
import "./styles/style.css"
export default function App() {
  const [favCities,setFavCities] = React.useState([]);

  // const [citiesWeather, setCitiesWeather] = useState([]);

  // useEffect(() => {
  //   async function fetchWeather() {
  //       const apiKey = "69c7daa9223cbc43fab0367cc0f76034";

  //       // Fetch weather for all favorite cities
  //       const promises = favoriteCities.map(async (city) => {
  //       const res = await fetch(
  //           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  //       );
  //       return res.json();
  //       });

  //     const results = await Promise.all(promises);
  //     setCitiesWeather(results);
  //   }

  //   fetchWeather();
  // }, []);
  return (
  
      <section className="mainSection">
        <Header/>
        <BackgroundView/>
        <InformationSection/>
        <PopularCities/>
      
      </section>
  
  );
}
