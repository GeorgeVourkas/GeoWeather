import React from "react";
import "../styles/backgroundView.css"
import { AnimatePresence, motion } from "framer-motion";
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
      <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            className="cityNameInput"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </motion.div>

    </div>
  );
}
