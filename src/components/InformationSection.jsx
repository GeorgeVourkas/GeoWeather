import sunnyIcon from "../assets/sunnyIcon.png"
import "../styles/informationSection.css"
export default function InformationSection(props){
    console.log(props)
    return(
        props.city && <section className="infoSection">
            <div className="container">
                {/* <div className="cityName">
                    <h1>Kastoria</h1>
                </div> */}
                <div className="contLeft">
                    <div className="contLeftUp">
                        <img src={`http://openweathermap.org/img/wn/${props.city.weather[0].icon}.png`} alt="WeatherIcon" />
                        <h1>{Math.round(props.city.main.temp)}°</h1>
                    </div>
                    <div className="contLeftDown">
                        {/* <h2 className="cityName">{props.selectedCityName? props.selectedCityName.name: "No city found"}</h2> */}
                    <h2 className="cityName">{props.city.name}</h2>
                        <h2 className="weatherDescription">{props.city.weather[0].description}</h2>
                        <h3 className="time">16:54</h3>
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
                            <p>30%</p>
                        </div>
                        <div className="infoRow">
                            <p>High</p>
                            <p>28°</p>
                        </div>
                        <div className="infoRow">
                            <p>Low</p>
                            <p>12°</p>
                        </div>
                        <div className="infoRow">
                            <p>Sunrise</p>
                            <p>07:36</p>
                        </div>
                        <div className="infoRow">
                            <p>Sunset</p>
                            <p>19:56</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}