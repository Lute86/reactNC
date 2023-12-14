import React, { useEffect } from "react";
import manos from "../../assets/manos.jpg";
import smart from "../../assets/smart.png";
import password from "../../assets/password.png";
import money from "../../assets/money.png";
import spend from "../../assets/spend.png";
import "../../index.css";
import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="welcome-container">
      {/* Presentation image section */}
      <section className="background-section">
        <div className="bg-section-content">
          <h1 className="bg-img-title">Bienvenid@ a FinanzApp</h1>
          <p className="bg-img-subtitle">
            Finanzas para los que saben, y los que quieren aprender!
          </p>
        </div>
      </section>

      {/* About us section */}
      <section className="about-us">
        <div className="about-us-content">
          <div className="about-us-left">
            {/* You can place your company's image here */}
            <img className="img-about" src={smart} alt="Company" />
          </div>
          <div className="about-us-right">
            <h2>¿Qué nos hace diferentes?</h2>
            <hr />

            <ul className="p-about">
              <li>Funcionalidad simple</li>
              <li>Facilidad de uso</li>
              <li>Inclusión Financiera</li>
              <li>Beneficios Exclusivos</li>
              <li>Cuenta gratuita</li>
              <li>Seguridad</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="values">
        <div className="values-content">
          <h2>Simple</h2>
          <div className="value-cards">
            <div className="value-card">
              <img className="value-card-img" src={money} alt="" />
              <h3>Descargá</h3>
              <p>Descargá la app desde Play Store o App Store en tu celular.</p>
              {/* <div className="download-icons">
                <a href="#" target="_blank"><img className="gplay-icon" src={gplay} alt="google play" /></a>
                <a href="#" target="_blank"><img className="apple-icon" src={apple} alt="apple store" /></a>
              </div> */}
            </div>
            <Link to={"/signup"}>
              <div className="value-card value-card-register">
                <img className="value-card-img" src={password} alt="" />

                <h3>Registrate</h3>
                <p>
                  Completá el registro con tus datos y obtené tu tarjeta
                  digital.
                </p>
              </div>
            </Link>
            <div className="value-card">
              <img className="value-card-img" src={spend} alt="" />

              <h3>Empezá</h3>
              <p>
                Activá tu tarjeta desde la app y empezá a usarla como gustes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial section */}
      <section className="subscription">
        <div className="subscription-content">
          <h2>Inclusiva</h2>
          <hr />
          <ul className="subscription-features">
            <li>Te ayudamos a integrarte en las finanzas en linea</li>
            <li>Tutoriales interactivos: aprende sin miedo</li>
            <li>Consejos para mejor manejo de tus finanzas</li>
            <li>Soporte personalizado</li>
          </ul>
          <Link to={'/tutorial'}><button className="subscription-button">Tutorial</button></Link>
        </div>
      </section>

      {/* Testimonies section */}
      <section className="companies-involved">
        <h2>Testimonios</h2>
        <hr />
        <Slider/>
      </section>
    </div>
  );
}

export default Home;
