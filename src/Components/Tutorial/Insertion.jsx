import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useTutorialState } from "../../Context/tutorialContext";

function Insertion({ name, type, onSubmit, isValid }) {
  const [input, setInput] = useState("");
  const { handleCompleted } = useTutorialState();
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Calls submit from context
    onSubmit(input, type);
    setInput("");
  };

  return (
    <div>
      <h3>{name}</h3>
      {type != "finished" ? (
        <form onSubmit={handleSubmit}>
          <input type={type} value={input} onChange={handleInputChange} />
          <button type="submit">
            <FaRegArrowAltCircleRight />
          </button>
          {!isValid && <p>Ingreso inválido</p>}
        </form>
      ) : (
        <div>
          <button onClick={() => handleCompleted()}>Siguiente</button>
        </div>
      )}
    </div>
  );
}

export default Insertion;
