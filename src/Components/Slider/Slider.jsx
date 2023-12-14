import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import man from '../../assets/man.png'
import woman from '../../assets/woman.png'
import woman2 from '../../assets/woman2.png'

const testimonies = [
  { id: 1, name: 'John Doe', quote: "FinanzApp Educa simplificó mi vida financiera. Funciones avanzadas fáciles de usar. La educación integrada hizo que invertir sea accesible y emocionante.", image: man },
  { id: 2, name: 'Jane Smith', quote: "Como novato en finanzas online, FinanzApp Educa me guió con tutoriales simples. Ahora, tomo decisiones financieras informadas con confianza. ¡Increíblemente educativo!", image: woman2 },
  { id: 3, name: 'Alice Johnson', quote: "FinanzApp Educa no solo me dio acceso a servicios financieros, sino que me educó en el proceso. Ahora me siento parte integral del mundo financiero digital.", image: woman },
];

const Slider = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentTestimony((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
    }, 3000); // Change the delay (in milliseconds) here to adjust the sliding interval

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNext = () => {
    setCurrentTestimony((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const handlePrev = () => {
    setCurrentTestimony((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentTestimony((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  return (
    <div className="testimonies-slider">
      <div className="testimony">
        <div className="testimony-image">
          <img src={testimonies[currentTestimony].image} alt={testimonies[currentTestimony].name} />
        </div>
        <p className="quote">"{testimonies[currentTestimony].quote}"</p>
        <p className="name">{testimonies[currentTestimony].name}</p>
      </div>
      <div className="controls">
        <button className='control-button' onClick={handlePrev}><MdOutlineArrowBackIos size={30}/></button>
        <button className='control-button' onClick={handleNext}><MdOutlineArrowForwardIos size={30}/></button>
      </div>
    </div>
  );
};

export default Slider;