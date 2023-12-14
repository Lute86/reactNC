import React from "react";
import "./Tutorial.css";
import Steps from "../../Components/Tutorial/Steps";
import { useTutorialState } from "../../Context/tutorialContext";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../Context/context";

function Tutorial() {
  const { loggedUser } = useGlobalState();
  const { tasks, currentTask } = useTutorialState();
  const navigate = useNavigate();

  return (
    <main className="tutorial-container">
      <div className="tutorial-title">
        <h1>Tutorial</h1>
        <hr />
      </div>
      {currentTask < tasks.length ? (
        <section className="tutorial-section">
          <Steps />
        </section>
      ) : (
        <div className="tutorial-div">
          <h2>Tutorial Completo</h2>
          <p>Felicitaciones! Completaste el tutorial.</p>
          {!loggedUser && <button
            className="tutorial-registrarme-btn"
            onClick={() => navigate("/signup")}
          >
            Registrarme
          </button>}
        </div>
      )}
    </main>
  );
}

export default Tutorial;
