
import { AnimatePresence, motion } from "framer-motion";
export default function CityInfoBlock({ cityData }) {
    if (!cityData || !cityData.main) return null; // safeguard if data not loaded yet
  return (
    // <motion.div 
    // className="infoSection"
    // initial={{ opacity: 0, y: -10 }}
    // animate={{ opacity: 1, y: 0 }}
    // exit={{ opacity: 0, y: -10 }}
    // transition={{ duration: 0.3 }}

    <motion.div 
      className="cityInfoBlock"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
}
