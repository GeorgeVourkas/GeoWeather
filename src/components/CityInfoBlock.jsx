// import sunnyImage from "../assets/sunnyIcon.png"
// export default function CityInfoBlock(){
//     return(
//         <div className="cityInfoBlock">
//             <div className="upperHalf">
//                 <div className="uppperLeft">
//                     <h2>23°C</h2>
//                     <h3>Athens</h3>
//                 </div>
//                 <div className="upperRight">
//                     <img className="statusImg" src={sunnyImage} alt="" />
//                 </div>
//             </div>
//             <div className="lowerHalf">
//                 <p className="weatherStatus">Sunny</p>
//                 <p className="realFeel">Real feel: 24°C</p>
//             </div>
//         </div>
//     )
// }


export default function CityInfoBlock({ cityData }) {
    if (!cityData || !cityData.main) return null; // safeguard if data not loaded yet
    console.log(cityData)
  return (
    <div className="cityInfoBlock">
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
    </div>
  );
}
