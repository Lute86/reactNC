import React from "react";
import { useTutorialState } from "../../Context/tutorialContext";

function Steps() {
  const { tasks, currentTask} = useTutorialState()
  return (
    <div className="step-div">
      <h2 className="step-h2">{tasks[currentTask].step}</h2>
      <hr className="step-hr"/>
      {tasks[currentTask].component}
    </div>
  );
}

export default Steps;
