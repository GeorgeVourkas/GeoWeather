import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style.css"
export default function App() {
  const [city, setCity] = useState(""); // lift state here

  return (
    <section className="SectionMain">
      <Header city={city} setCity={setCity}/>
      <Main city={city}/>
    </section>
  );
}
