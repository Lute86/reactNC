import React from "react";
import { useTutorialState } from "../../Context/tutorialContext";

function Steps() {
  const { tasks, currentTask} = useTutorialState()
  return (
    <div>
      <h2>{tasks[currentTask].step}</h2>
      {tasks[currentTask].component}
    </div>
  );
}

export default Steps;
