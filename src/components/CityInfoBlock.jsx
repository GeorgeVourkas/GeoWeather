import sunnyImage from "../assets/sunnyIcon.png"
export default function CityInfoBlock(){
    return(
        <div className="cityInfoBlock">
            <div className="upperHalf">
                <div className="uppperLeft">
                    <h2>23°C</h2>
                    <h3>Athens</h3>
                </div>
                <div className="upperRight">
                    <img className="statusImg" src={sunnyImage} alt="" />
                </div>
            </div>
            <div className="lowerHalf">
                <p className="weatherStatus">Sunny</p>
                <p className="realFeel">Real feel: 24°C</p>
            </div>
        </div>
    )
}