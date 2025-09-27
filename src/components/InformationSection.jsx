import sunnyIcon from "../assets/sunnyIcon.png"
import "../styles/informationSection.css"
import { AnimatePresence, motion } from "framer-motion";

export default function InformationSection(props) {
  // Αν δεν υπάρχει ακόμα city → μην συνεχίζεις
  if (!props.city || !props.city.timezone) {
    return null;
  }

  const tzOffset = props.city.timezone; // offset σε seconds
  const cityDate = new Date(Date.now() + tzOffset * 1000);

  const formattedTime = cityDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC"
  });

  const sunriseDate = new Date((props.city.sys.sunrise + tzOffset) * 1000);
  const sunsetDate  = new Date((props.city.sys.sunset  + tzOffset) * 1000);

  const formattedSunrise = sunriseDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", timeZone: "UTC" });
  const formattedSunset  = sunsetDate.toLocaleTimeString([],  { hour: "2-digit", minute: "2-digit", timeZone: "UTC" });

  return (
    <AnimatePresence>
        <motion.div 
            className="infoSection"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container">
                <div className="contLeft">
                <div className="contLeftUp">
                    <img
                    src={`http://openweathermap.org/img/wn/${props.city.weather[0].icon}.png`}
                    alt="WeatherIcon"
                    />
                    <h1>{Math.round(props.city.main.temp)}°</h1>
                </div>
                <div className="contLeftDown">
                    <h2 className="cityName">{props.city.name}</h2>
                    <h2 className="weatherDescription">{props.city.weather[0].description}</h2>
                    <h3 className="time">{formattedTime}</h3>
                </div>
                </div>
                <div className="contRight">
                <div className="infoContainer">
                    <div className="infoRow">
                    <p>Feels like:</p>
                    <p>{Math.round(props.city.main.feels_like)}°</p>
                    </div>
                    <div className="infoRow">
                    <p>Humidity:</p>
                    <p>{props.city.main.humidity}%</p>
                    </div>
                    <div className="infoRow">
                    <p>High</p>
                    <p>{Math.round(props.city.main.temp_max)}°</p>
                    </div>
                    <div className="infoRow">
                    <p>Low</p>
                    <p>{Math.round(props.city.main.temp_min)}°</p>
                    </div>
                    <div className="infoRow">
                    <p>Sunrise</p>
                    <p>{formattedSunrise}</p>
                    </div>
                    <div className="infoRow">
                    <p>Sunset</p>
                    <p>{formattedSunset}</p>
                    </div>
                </div>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
  );
}
