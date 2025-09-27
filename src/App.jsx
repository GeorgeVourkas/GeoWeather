import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import BackgroundView from "./components/BackgroundView";
import InformationSection from "./components/InformationSection";
import PopularCities from "./components/PopularCities";
import "./styles/style.css";

export default function App() {
  const apiKey = "69c7daa9223cbc43fab0367cc0f76034";

  const [selectedCityName, setSelectedCityName] = useState("");
  const [selectedCity, setSelectedCity] = useState(null); 

  async function fetchData(selectedCityName) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCityName}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      setSelectedCity(data); // save the full API object
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  }

  useEffect(() => {
    if (selectedCityName) {
      fetchData(selectedCityName);
    }
  }, [selectedCityName]);
  return (
  
      <section className="mainSection">
        <Header/>
        <BackgroundView selectedCityName ={selectedCityName} setSelectedCityName={setSelectedCityName}/>
        {selectedCityName && <InformationSection city={selectedCity} setcity ={selectedCityName}/>}
        <PopularCities/>
      
      </section>
  
  );
}
