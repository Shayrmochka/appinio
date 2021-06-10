import React, { useState } from 'react';
import ProgressBar from '../../components/progress-bar/ProgressBar';
import FirstStep from '../../components/main-forms/FirstStep';
import SecondStep from '../../components/main-forms/SecondStep';
import ThirdStep from '../../components/main-forms/ThirdStep';
import FourthStep from '../../components/main-forms/FourthStep';
import AdditionalInfo from '../../components/additional-forms/AdditionalInfo';
import './Survey.css';

const steps = [
  'Details of the primary visa holder',
  'Details of other person(s)',
  'Health',
  'Character',
];

const Survey = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length) {
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return;
    }
    setActiveStep(activeStep - 1);
  };

  console.log(activeStep);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      case 3:
        return <FourthStep />;
      default:
        return <FirstStep />;
    }
  };

  return (
    <div className="survey">
      <div className="survey__header-info header-info">
        <p className="header-info__back-link">Back to main page</p>
        <p className="header-info__title">Create new survey</p>
      </div>
      <ProgressBar steps={steps} activeStep={activeStep} />

      <div className="survey__container container">
        <div className="container__left">
          {/* <FirstStep /> */}
          {/* <SecondStep /> */}

          <>
            {activeStep === steps.length ? (
              <div>Final Page</div>
            ) : (
              <div>{getStepContent(activeStep)}</div>
            )}
          </>
        </div>
        <div className="container__right">
          <AdditionalInfo handleNext={handleNext} handleBack={handleBack} />
        </div>
      </div>
    </div>
  );
};

export default Survey;
