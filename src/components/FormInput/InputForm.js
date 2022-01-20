import React, { useState } from "react";

import styles from "./InputForm.module.css";
import Button from "../UI/Button";
import UserDetails from "./UserDetails/UserDetails";
import UsageDetails from "./UsageDetails/UsageDetails";
import WorkspaceDetails from "./WorkspaceDetails/WorkspaceDetails";

const InputForm = (props) => {
  const [formStep, setFormStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [isFNValid, setIsFNValid] = useState(true);
  const [displayName, setDisplayName] = useState("");
  const [isDNValid, setIsDNValid] = useState(true);
  const [wsName, setWsName] = useState("");
  const [isWNValid, setIsWNValid] = useState(true);
  const [wsURL, setWsURL] = useState("");
  const [usageOption, setUsageOption] = useState("For myself");

  const formData = {
    fullName: fullName,
    dispName: displayName,
    workspaceName: wsName,
    workspaceURL: (wsURL.length !== 0 ? "www.eden.com/" : "") + wsURL,
    usageOption: usageOption
  };

  const fullNameChangeHandler = (event) => {
    setFullName(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsFNValid(true);
    }
  };

  const displayNameChangeHandler = (event) => {
    setDisplayName(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsDNValid(true);
    }
  };

  const wsNameChangeHandler = (event) => {
    setWsName(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsWNValid(true);
    }
  };

  const wsURLChangeHandler = (event) => {
      setWsURL(event.target.value);  
  };

  const usageOptionChangeHandler = (option) => {
    setUsageOption(option === 2 ? "With my team" : "For myself");
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    let formState = formStep;
    switch (formStep) {
      case 1:
        if (fullName.trim().length > 0 && displayName.trim().length > 0) {
          setFormStep(2);
          formState = 2;
        } else if (
          fullName.trim().length > 0 &&
          displayName.trim().length === 0
        ) {
          setIsFNValid(false);
        } else if (
          fullName.trim().length === 0 &&
          displayName.trim().length > 0
        ) {
          setIsDNValid(false);
        }
        else if (
          fullName.trim().length === 0 &&
          displayName.trim().length === 0
        ) {
          setIsFNValid(false);
          setIsDNValid(false);
        }
        break;

      case 2:
        if (wsName.trim().length > 0) {
          setFormStep(3);
          formState = 3;
        }  else if (wsName.trim().length === 0) {
          setIsWNValid(false);
        }
        break;

      case 3:
        setFormStep(4);
        formState = 4;
        break;

      default:
        break;
    }

    props.onNext(formState, formData);
  };

  return (
    <form onSubmit={FormSubmitHandler} className={styles["form-controls"]}>
      {formStep === 1 && (
        <UserDetails
          fullName={fullName}
          isFNValid={isFNValid}
          displayName={displayName}
          isDNValid={isDNValid}
          onFullNameChange={fullNameChangeHandler}
          onDisplayNameChange={displayNameChangeHandler}
        />
      )}
      {formStep === 2 && (
        <WorkspaceDetails
          wsName={wsName}
          isWNValid={isWNValid}
          wsURL={wsURL}
          onWsNameChange={wsNameChangeHandler}
          onWsURLChange={wsURLChangeHandler}
        />
      )}
      {formStep === 3 && (
        <UsageDetails onOptionChange={usageOptionChangeHandler} />
      )}

      <div className={styles["form-controls__action"]}>
        {formStep !== 4 && <Button type="submit">{props.btnText}</Button>}
        {formStep === 4 && (
          <Button onBtnClick={props.launchEden}>{props.btnText}</Button>
        )}
      </div>
    </form>
  );
};

export default InputForm;
