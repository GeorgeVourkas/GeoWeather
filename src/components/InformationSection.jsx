import sunnyIcon from "../assets/sunnyIcon.png"
import "../styles/informationSection.css"
export default function InformationSection(){
    return(
        <section className="infoSection">
            <div className="container">
                {/* <div className="cityName">
                    <h1>Kastoria</h1>
                </div> */}
                <div className="contLeft">
                    <div className="contLeftUp">
                        <img src={sunnyIcon} alt="WeatherIcon" />
                        <h1>23°</h1>
                    </div>
                    <div className="contLeftDown">
                        <h2 className="cityName">Kastoria</h2>
                        <h2 className="weatherDescription">Sunny</h2>
                        <h3 className="time">16:54</h3>
                    </div>
                </div>
                <div className="contRight"> 
                
                    <div className="infoContainer">
                        <div className="infoRow">
                            <p>Feels like:</p>
                            <p>25°</p>
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