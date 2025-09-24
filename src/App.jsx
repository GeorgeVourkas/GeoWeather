import { useState } from "react";
import "./style.css"
import BackgroundView from "./components/BackgroundView";
import Header from "./components/Header";


export default function App() {
  return (
    <>
      <section className="mainSection">
        <Header/>
        <BackgroundView/>
      </section>
    </>
  );
}
