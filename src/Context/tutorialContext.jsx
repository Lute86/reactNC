import React, { createContext, useContext, useState } from "react";
import Insertion from "../Components/Tutorial/Insertion";
import validateInput from "../utils/validation";
import DragAndDropContainer from "../Components/Tutorial/Dnd";

const TutorialContext = createContext();

const TutorialProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepValid, setIsStepValid] = useState(true);
  const [currentTask, setCurrentTask] = useState(0);
  const items = [{ id: 1, text: "Hola" }];
  const [isDragClicked, setIsDragClicked] = useState(false);

  const handleTaskChange = () => {
    setCurrentTask((prev) => prev + 1);
  };

  const registerSteps = [
    { type: "text", label: "Nombre" },
    { type: "text", label: "Apellido" },
    { type: "email", label: "Email" },
    { type: "number", label: "DNI" },
    { type: "password", label: "Password" },
    { type: "finished", label: "Completado" },
  ];
  const loginSteps = [
    { type: "email", label: "Email" },
    { type: "password", label: "Password" },
    { type: "finished", label: "Completado" },
    //Without the empty objects it throws an error. Has to be the same length as regsteps
    {},
    {},
    {},
  ];

  function handleStepSubmit(input, type) {
    // Validate the input of the current step
    const isValid = validateInput(input, type);
    setIsStepValid(isValid);

    // Move to the next step if the input is valid
    if (isValid) {
      setCurrentStep(currentStep + 1);
      setIsStepValid(true);
    }
  }

  function handleCompleted() {
    setCurrentTask((prev) => prev + 1);
    setCurrentStep(0);
  }

  const tasksReg = {
    step: "Registro",
    component: (
      <Insertion
        name={registerSteps[currentStep].label}
        type={registerSteps[currentStep].type}
        onSubmit={handleStepSubmit}
        isValid={isStepValid}
      />
    ),
  };

  const taskLogin = {
    step: "Login",
    component: (
      <Insertion
        name={loginSteps[currentStep].label}
        type={loginSteps[currentStep].type}
        onSubmit={handleStepSubmit}
        isValid={isStepValid}
      />
    ),
  };

  const taskDrag = {
    step: window.innerWidth>768 ? "Movimiento" : "Clicks",
    component: (
      <DragAndDropContainer
        items={items}
        onStepChange={handleTaskChange}
      />
    ),
  };

  const tasks = [taskDrag, tasksReg, taskLogin];

  return (
    <TutorialContext.Provider
      value={{
        currentStep,
        tasks,
        setCurrentTask,
        currentTask,
        setCurrentStep,
        registerSteps,
        loginSteps,
        handleCompleted,
        handleTaskChange,
        items,
        isDragClicked,
        setIsDragClicked
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};

export const useTutorialState = () => {
  return useContext(TutorialContext);
};

export { TutorialContext, TutorialProvider };
