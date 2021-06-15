import React, { useState } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import ProgressBar from '../../components/progress-bar/ProgressBar';
import FirstStep from '../../components/main-forms/FirstStep';
import SecondStep from '../../components/main-forms/SecondStep';
import ThirdStep from '../../components/main-forms/ThirdStep';
import FourthStep from '../../components/main-forms/FourthStep';
import FifthStep from '../../components/main-forms/FifthStep';
import SixthStep from '../../components/main-forms/SixthStep';
import AdditionalInfo from '../../components/additional-forms/AdditionalInfo';
import './Survey.css';

// interface userData {
//   defaultCountry: string;
//   defaultCity: string;
// }

const steps = [
  {
    formId: 'firstStep',
    stepNumber: 0,
    stepTitle:
      'Part A - Details of the primary visa holder or applicant (the primary person)',
    complete: false,
  },
  {
    formId: 'secondStep',
    stepNumber: 1,
    stepTitle: 'Part A - Details of person(s) included in this application',
    complete: false,
  },
  {
    formId: 'thirdStep',
    stepNumber: 2,
    stepTitle: 'Part A - Health',
    complete: false,
  },
  {
    formId: 'fourthStep',
    stepNumber: 3,
    stepTitle: 'Part A - Has any person included in this application, ever:',
    complete: false,
  },
  {
    formId: 'fifthStep',
    stepNumber: 4,
    stepTitle:
      'Part B – Assistance with this form / Part C – Options for receiving written communications / Part D – Payment details',
    complete: false,
  },
  {
    formId: 'sixthStep',
    stepNumber: 5,
    stepTitle: 'Part E – Declaration and consent',
    complete: false,
  },
];

interface UserData {
  defaultCountry: string;
  defaultRegion: string;
}

const Survey = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState<any>({
    defaultCountry: '',
    defaultRegion: '',
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSelect = (val: any, elementName: any) => {
    setUserData({
      ...userData,
      [elementName]: val,
    });
  };

  const handleSelectRegion = (val: any, elementName: any) => {
    setUserData({
      ...userData,
      [elementName]: {
        region: val,
      },
    });
  };

  var parseBool = function (str: any) {
    // console.log(typeof str);
    // strict: JSON.parse(str)

    if (str == null) return false;

    if (typeof str === 'boolean') {
      return str === true;
    }

    if (typeof str === 'string') {
      if (str == '') return false;

      str = str.replace(/^\s+|\s+$/g, '');
      if (str.toLowerCase() == 'true' || str.toLowerCase() == 'yes')
        return true;

      str = str.replace(/,/g, '.');
      str = str.replace(/^\s*\-\s*/g, '-');
    }

    // var isNum = string.match(/^[0-9]+$/) != null;
    // var isNum = /^\d+$/.test(str);
    if (!isNaN(str)) return parseFloat(str) != 0;

    return false;
  };

  const handleClick = (event: any) => {
    if (event.target.value === 'true' || event.target.value === 'false') {
      setUserData({
        ...userData,
        [event.target.name]: parseBool(event.target.value),
      });
    } else {
      setUserData({
        ...userData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleCanvas = (element: any, event: any, canvas: any) => {
    // setUserData({
    //   ...userData,
    //   [element.name]: [
    //     { x: 0, y: 0 },
    //     ...userData[element.name],
    //     {
    //       x: event.pageX - canvas.offsetLeft,
    //       y: event.pageY - canvas.offsetTop,
    //     },
    //   ],
    // });
  };

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

  const handleSend = () => {
    console.log('send');
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('qwe');
    if (activeStep === steps.length) {
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <FirstStep handleSubmit={handleSubmit} />;
      case 1:
        return <SecondStep handleSubmit={handleSubmit} />;
      case 2:
        return <ThirdStep handleSubmit={handleSubmit} />;
      case 3:
        return <FourthStep handleSubmit={handleSubmit} />;
      case 4:
        return <FifthStep handleSubmit={handleSubmit} />;
      case 5:
        return <SixthStep handleSubmit={handleSubmit} />;
      default:
        return <FirstStep handleSubmit={handleSubmit} />;
    }
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        handleChange,
        handleChangeSelect,
        handleClick,
        handleCanvas,
      }}
    >
      <div className="survey">
        <div className="survey__header-info header-info">
          <p className="header-info__back-link">Back to main page</p>
          <p className="header-info__title">
            491 subsequent entrant application
          </p>
        </div>
        <ProgressBar
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        <div className="survey__container container">
          <div className="container__left">
            <>
              {activeStep === steps.length ? (
                <div>Final Page</div>
              ) : (
                <div>{getStepContent(activeStep)}</div>
              )}
            </>
          </div>
          <div className="container__right">
            <AdditionalInfo
              handleNext={handleNext}
              handleBack={handleBack}
              handleSend={handleSend}
              stepTitle={steps[activeStep].stepTitle}
              stepsNumber={steps.length}
              activeStep={activeStep}
              formId={steps[activeStep].formId}
            />
          </div>
        </div>
      </div>
    </UserDataContext.Provider>
  );
};

export default Survey;
