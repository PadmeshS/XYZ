import React, { useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Title from "./components/Title/Title";
import FormSuccess from "./components/FormSuccess/FormSuccess";
import InputForm from "./components/FormInput/InputForm";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

function App() {
  const [progress, setProgress] = useState(1);
  const [progressPercent, setProgressPercent] = useState(17.5);
  const [titleText, setTitleText] = useState("Welcome! First things first...");
  const [titleSubText, setTitleSubText] = useState(
    "You can always change them later."
  );
  const [btnText, setBtnText] = useState("Create Workspace");

  const next = (formStep, formData) => {
    setProgress(formStep);
    switch (formStep) {
      case 2:
        setProgressPercent(50);
        setTitleText("Let's set up a home for all your work");
        setTitleSubText("You can always create another workspace later.");
        break;
      case 3:
        setProgressPercent(82.5);
        setTitleText("How are you planning to use Eden?");
        setTitleSubText("We'll streamline your setup experience accordingly.");
        break;
      case 4:
        setProgressPercent(100);
        setTitleText(`Congratulations, ${formData.dispName}!`);
        setTitleSubText(
          "You have completed onboarding, you can start using the Eden!"
        );
        setBtnText("Launch Eden");
        break;
      default:
        break;
    }

    console.log(formData);
  };

  const launchEden = () => {
    alert("Launching Eden");
  };

  return (
    <div id="app">
      <Logo />
      <div className="progressBarSection">
        <ProgressBar
          percent={progressPercent}
          filledBackground="#644ce4"
          height={2}
        >
          <Step accomplished={progress === 1}>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step accomplished={progress === 2}>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step accomplished={progress === 3}>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step accomplished={progress === 4}>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              >
                {index + 1}
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
      {progress === 4 && <FormSuccess />}
      <Title text={titleText} subtext={titleSubText} />
      <InputForm
        onNext={next}
        progressState={progress}
        btnText={btnText}
        launchEden={launchEden}
      />
    </div>
  );
}

export default App;
