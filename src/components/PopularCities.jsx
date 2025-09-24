import React from "react"
import CityInfoBlock from "./CityInfoBlock"
export default function PopularCities (){
    const [favCities,setFavCities] = React.useState([]);
    return(
        <section className="popularSection">
            <CityInfoBlock/>
            <CityInfoBlock/>
        </section>
    )
}