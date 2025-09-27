import React, { useEffect, useState ,useRef} from "react";
import Header from "./components/Header";
import BackgroundView from "./components/BackgroundView";
import InformationSection from "./components/InformationSection";
import PopularCities from "./components/PopularCities";
import "./styles/style.css";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const apiKey = "69c7daa9223cbc43fab0367cc0f76034";

  const [selectedCityName, setSelectedCityName] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [error, setError] = useState(null); 

  const infoRef = useRef(null); // ref to scroll 

  async function fetchData(selectedCityName) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCityName}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        // API error (e.g., city not found)
        setError(`No place found with the name "${selectedCityName}", please try again.`);
        setSelectedCity(null);
      } else {
        setSelectedCity(data);
        setError(null); // clear error
      }
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError("Something went wrong. Please try again."); // ✅ now works
      setSelectedCity(null);
    }
  }

  useEffect(() => {
    if (selectedCityName) {
      fetchData(selectedCityName);
    }
  }, [selectedCityName]);

  useEffect(() => {
    if (selectedCity && infoRef.current) {
      infoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCity]);

  return (
    <section className="mainSection">
      <Header />
      <BackgroundView
        selectedCityName={selectedCityName}
        setSelectedCityName={setSelectedCityName}
      />

      {/* show weather info if city is found */}
      {selectedCity && (
        <InformationSection city={selectedCity} setcity={selectedCityName}  ref={infoRef} />
      )}

      {/* show error if not found */}
      {error && (
        <motion.div
          className="errorMessage"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <p>{error}</p>
        </motion.div>
      )}
  

      <PopularCities />
    </section>
  );
}
