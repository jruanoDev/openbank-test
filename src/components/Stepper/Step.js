import "./Step.scss";

import React from "react";

import { ReactComponent as CompletedIcon } from "../../assets/img/checked.svg";

const Step = ({ index, active, completed, isLast }) => {
  const stepStateClassname = active ? "-active" : completed ? "-completed" : "";
  return (
    <>
      <div className={`Step Step${stepStateClassname}`}>
        {!completed ? index : <CompletedIcon width={20} />}
      </div>
      {!isLast && (
        <div className={`Step-bar Step-bar${stepStateClassname}`}></div>
      )}
    </>
  );
};

export default Step;
