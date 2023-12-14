import React, { useEffect, useState } from 'react';
import './Error.css';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const [count, setCount] = useState(4);

  useEffect(() => {
    setCount(4)
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Cleanup functions
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className='error-page-container'>
      <div className='error-page-message'>Oops.....La página que buscas no existe</div>
      <p>Serás redirigido a la página principal en {count} segundos...</p>
    </div>
  );
}

export default Error;