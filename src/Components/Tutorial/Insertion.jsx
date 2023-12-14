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
    <div className="insertion-div">
      <h3 className="insertion-title">{name}</h3>
      {type != "finished" ? (
        <form className="insertion-form" onSubmit={handleSubmit}>
          <div className="insertion-entry">
            <input className="insertion-input" type={type} value={input} onChange={handleInputChange} />
            <button className="insertion-btn" type="submit">
              <FaRegArrowAltCircleRight size={25}/>
            </button>
          </div>
          {!isValid && <p className="insertion-p">Ingreso inválido. <span className="insertion-span">{
              type == "text" ? "Solo letras" :
              type == "email" ? "Formato email: xxx@xxx.xxx" :
              type == "number" ? "Solo numeros" :
              type == "password" ? "Longitud min. 6. 1 número y una mayúscula." :
              ""
            }</span></p>}
        </form>
      ) : (
        <div>
          <button className="insertion-btn-next" onClick={() => handleCompleted()}>Siguiente</button>
        </div>
      )}
    </div>
  );
}

export default Insertion;
