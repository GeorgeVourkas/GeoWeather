import React from "react";
import "../styles/backgroundView.css"
export default function BackgroundView(props) {
  const [input, setInput] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Input value:", input); 
    props.setSelectedCityName(input)
    setInput(""); 
  } 

  return (
    <div className="backgroundView">
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          className="cityNameInput"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}
