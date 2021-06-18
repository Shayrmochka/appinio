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
import { parseBool } from '../../utilites/parseBool';
import { InputEvent } from '../../interfaces/interfaces';
import './Survey.css';

// interface userData {
//   defaultCountry: string;
//   defaultCity: string;
// }

// const steps =

// '3-applied-visa':
// '3-australian-visa-refused':
// '3-authority':
// '3-bridging-visa-e':
// '3-bridging-visa-expiry':
// '3-bridging-visa-issue':
// '3-bridging-visa-place':
// '3-card':
// '3-card-country-issue':
// '3-card-identify-number':
// '3-citizenship':
// '3-countryOfPassport':
// '3-currently-located':
// '3-date-of-application':
// '3-dateOfBirth':
// '3-expiry':
// '3-family-name':
// '3-gender':
// '3-given-names':
// '3-goverment-student':
// '3-issue':
// '3-location-of-application':
// '3-other-family-name':
// '3-other-given-names':
// '3-other-names':
// '3-passportNumber':
// '3-relationship':
// '3-relationship-status':
// '3-stasus-in-country':
// '3-supported-student':
// '3-visa-applied-for':
// '3-visa-or-application':
//'3-place-of-birth':

// ====

// 5-visited: {text: "", error: false}
// 6-hospital: {text: "", error: false}
// 7-work: {text: "", error: false}
// 8-work: {text: "", error: false}
// 9-tuberculosis: {text: "", error: false}
// 10-for: {text: "", error: false}
// 11-assistance: {text: "", error: false}
// 12-undertaken: {text: "", error: false}
// 14-cumulative-period: {text: "", error: false}

// ===

// 15-acquitted: {text: "", error: false}
// 15-charged: {text: "", error: false}
// 15-convicted: {text: "", error: false}
// 15-criminal-conduct: {text: "", error: false}
// 15-deported: {text: "", error: false}
// 15-genocide: {text: "", error: false}
// 15-guilty-of-sex: {text: "", error: false}
// 15-interpol: {text: "", error: false}
// 15-legal: {text: "", error: false}
// 15-military-force: {text: "", error: false}
// 15-national-security: {text: "", error: false}
// 15-not-plead: {text: "", error: false}
// 15-order: {text: "", error: false}
// 15-organisation-engaged: {text: "", error: false}
// 15-outstanding-debts: {text: "", error: false}
// 15-overstayed: {text: "", error: false}
// 15-sex-offender: {text: "", error: false}
// 15-smuggling: {text: "", error: false}
// 15-training: {text: "", error: false}

// '15-acquitted': {text: "", error: false},
// '15-charged': {text: "", error: false},
// '15-convicted': {text: "", error: false},
// '15-criminal-conduct': {text: "", error: false},
// '15-deported': {text: "", error: false},
// '15-genocide': {text: "", error: false},
// '15-guilty-of-sex': {text: "", error: false},
// '15-interpol': {text: "", error: false},
// '15-legal': {text: "", error: false},
// '15-military-force': {text: "", error: false},
// '15-national-security': {text: "", error: false},
// '15-not-plead': {text: "", error: false},
// '15-order': {text: "", error: false},
// '15-organisation-engaged': {text: "", error: false},
// '15-outstanding-debts': {text: "", error: false},
// '15-overstayed': {text: "", error: false},
// '15-sex-offender': {text: "", error: false},
// '15-smuggling': {text: "", error: false},
// '15-training': {text: "", error: false},

// ====

// '16-address': {text: "", error: false},
// '16-assistance': {text: "", error: false},
// '16-assisted-person': {text: "", error: false},
// '16-family-name': {text: "", error: false},
// '16-given-names': {text: "", error: false},
// '16-mobile': {text: "", error: false},
// '16-office-hours': {text: "", error: false},
// '17-migration': {text: "", error: false},
// '18-pay': {text: "", error: false},
// '19-communications-sent': {text: "", error: false},
// '20-payment-details': {text: "", error: false},

const Survey = () => {
  const [steps, setSteps] = useState([
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
  ]);
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState<any>({
    firstStep: {
      '1-appID': { text: '', error: false, errorMessage: '' },
      '1-dateOfBirth': { text: '', error: false, errorMessage: '' },
      '1-family-name': { text: '', error: false, errorMessage: '' },
      '1-gender': { text: '', error: false, errorMessage: '' },
      '1-given-names': { text: '', error: false, errorMessage: '' },
      '1-grantNumber': { text: '', error: false, errorMessage: '' },
      '1-passport': { text: '', error: false, errorMessage: '' },
      '1-visaId': { text: '', error: false, errorMessage: '' },
      '1-visaTRN': { text: '', error: false, errorMessage: '' },
      '2-people': { text: '', error: false, errorMessage: '' },
    },
    secondStep: {
      '3-applied-visa': { text: '', error: false, errorMessage: '' },
      '3-australian-visa-refused': { text: '', error: false, errorMessage: '' }, // --
      '3-authority': { text: '', error: false, errorMessage: '' },
      '3-bridging-visa-e': { text: '', error: false, errorMessage: '' },
      //'3-bridging-visa-expiry': { text: '', error: false, errorMessage: '' },  // =-
      //'3-bridging-visa-issue': { text: '', error: false, errorMessage: '' },  // =-
      //'3-bridging-visa-place': { text: '', error: false, errorMessage: '' },  // =-
      '3-card': { text: '', error: false, errorMessage: '' },
      '3-card-country-issue': { text: '', error: false, errorMessage: '' },
      '3-card-identify-number': { text: '', error: false, errorMessage: '' },
      '3-citizenship': { text: '', error: false, errorMessage: '' },
      '3-countryOfPassport': { text: '', error: false, errorMessage: '' },
      '3-currently-located': { text: '', error: false, errorMessage: '' },
      //'3-date-of-application': { text: '', error: false, errorMessage: '' },  // ====
      '3-dateOfBirth': { text: '', error: false, errorMessage: '' },
      '3-expiry': { text: '', error: false, errorMessage: '' },
      '3-family-name': { text: '', error: false, errorMessage: '' },
      '3-gender': { text: '', error: false, errorMessage: '' },
      '3-given-names': { text: '', error: false, errorMessage: '' },
      '3-goverment-student': { text: '', error: false, errorMessage: '' },
      '3-issue': { text: '', error: false, errorMessage: '' },
      //'3-location-of-application': { text: '', error: false, errorMessage: '' }, // ====
      // '3-other-family-name': { text: '', error: false, errorMessage: '' }, // ====
      // '3-other-given-names': { text: '', error: false, errorMessage: '' }, // ====
      '3-other-names': { text: '', error: false, errorMessage: '' },
      '3-passportNumber': { text: '', error: false, errorMessage: '' },
      '3-relationship': { text: '', error: false, errorMessage: '' },
      '3-relationship-status': { text: '', error: false, errorMessage: '' },
      '3-stasus-in-country': { text: '', error: false, errorMessage: '' },
      '3-supported-student': { text: '', error: false, errorMessage: '' },
      //'3-visa-applied-for': { text: '', error: false, errorMessage: '' }, // ====
      '3-visa-or-application': { text: '', error: false, errorMessage: '' },
      '3-place-of-birth': { text: '', error: false, errorMessage: '' },
    },
    thirdStep: {
      '5-visited': { text: '', error: false, errorMessage: '' },
      '6-hospital': { text: '', error: false, errorMessage: '' },
      '7-work': { text: '', error: false, errorMessage: '' },
      '8-work': { text: '', error: false, errorMessage: '' },
      '9-tuberculosis': { text: '', error: false, errorMessage: '' },
      '10-for': { text: '', error: false, errorMessage: '' },
      '11-assistance': { text: '', error: false, errorMessage: '' },
      '12-undertaken': { text: '', error: false, errorMessage: '' },
      '14-cumulative-period': { text: '', error: false, errorMessage: '' },
      '5-date-from-first': { text: '', error: false, errorMessage: '' },
      '5-date-to-first': { text: '', error: false, errorMessage: '' },
      '1-from': { text: '2021-01-01', error: false },
      '1-to': { text: '2021-01-01', error: false },
      '1-country': { text: ' ', error: false },
      '1-persons': { text: ' ', error: false },
      '1-address': { text: ' ', error: false },
    },
    fourthStep: {
      '15-acquitted': { text: '', error: false, errorMessage: '' },
      '15-charged': { text: '', error: false, errorMessage: '' },
      '15-convicted': { text: '', error: false, errorMessage: '' },
      '15-criminal-conduct': { text: '', error: false, errorMessage: '' },
      '15-deported': { text: '', error: false, errorMessage: '' },
      '15-genocide': { text: '', error: false, errorMessage: '' },
      '15-guilty-of-sex': { text: '', error: false, errorMessage: '' },
      '15-interpol': { text: '', error: false, errorMessage: '' },
      '15-legal': { text: '', error: false, errorMessage: '' },
      '15-military-force': { text: '', error: false, errorMessage: '' },
      '15-national-security': { text: '', error: false, errorMessage: '' },
      '15-not-plead': { text: '', error: false, errorMessage: '' },
      '15-order': { text: '', error: false, errorMessage: '' },
      '15-organisation-engaged': { text: '', error: false, errorMessage: '' },
      '15-outstanding-debts': { text: '', error: false, errorMessage: '' },
      '15-overstayed': { text: '', error: false, errorMessage: '' },
      '15-sex-offender': { text: '', error: false, errorMessage: '' },
      '15-smuggling': { text: '', error: false, errorMessage: '' },
      '15-training': { text: '', error: false, errorMessage: '' },
    },
    fifthStep: {
      '16-address': { text: '', error: false, errorMessage: '' },
      '16-assistance': { text: '', error: false, errorMessage: '' },
      '16-assisted-person': { text: '', error: false, errorMessage: '' },
      '16-family-name': { text: '', error: false, errorMessage: '' },
      '16-given-names': { text: '', error: false, errorMessage: '' },
      '16-mobile': { text: '', error: false, errorMessage: '' },
      '16-office-hours': { text: '', error: false, errorMessage: '' },
      '17-migration': { text: '', error: false, errorMessage: '' },
      '18-pay': { text: '', error: false, errorMessage: '' },
      '19-communications-sent': { text: '', error: false, errorMessage: '' },
      '20-payment-details': { text: '', error: false, errorMessage: '' },
    },
    sixthStep: {
      '21-primary-signature': { text: '', error: false, errorMessage: '' },
      '21-secondary-signature-1': { text: '', error: false, errorMessage: '' },
    },
  });
  const handleChange = (event: InputEvent, form: string) => {
    if (
      event.target.type === 'text' &&
      !event.target.value.match(/^[a-zA-Z_ ]*$/)
    ) {
      setUserData({
        ...userData,
        [form]: {
          ...userData[form],
          [event.target.name]: {
            ...userData[form][event.target.name],
            text: event.target.value,
            error: true,
            errorMessage: 'cannot contain numbers and symbols',
          },
        },
      });

      return;
    }
    setUserData({
      ...userData,
      [form]: {
        ...userData[form],
        [event.target.name]: {
          ...userData[form][event.target.name],
          text: event.target.value,
          error: false,
        },
      },
    });
  };

  const handleChangeSelect = (val: string, elementName: string) => {
    setUserData({
      ...userData,
      [elementName]: val,
    });
  };

  // const handleSelectRegion = (val: any, elementName: any) => {
  //   setUserData({
  //     ...userData,
  //     [elementName]: {
  //       region: val,
  //     },
  //   });
  // };

  // const getData = async () => {
  //   await fetch(
  //     'http://geohelper.info/api/v1/cities?apiKey=rTIXzrnUuzWrZFfC3RRRmsJGhI30hXg8&locale[lang]=en'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const handleClick = (event: InputEvent, form: string, render: string[]) => {
    if (userData[form][event.target.name].text === event.target.value) {
      setUserData({
        ...userData,
        [form]: {
          ...userData[form],
          [event.target.name]: {
            ...userData[form][event.target.name],
            text: '',
            error: false,
          },
        },
      });
    } else if (
      event.target.value === 'true' ||
      event.target.value === 'false'
    ) {
      if (render && event.target.value === 'true') {
        const newTree = userData;
        render.map(
          (e: string) =>
            (newTree[form][e] = {
              text: '',
              error: '',
            })
        );
        setUserData({
          ...newTree,
          [form]: {
            ...userData[form],
            [event.target.name]: {
              ...userData[form][event.target.name],
              text: parseBool(event.target.value),

              error: false,
            },
          },
        });
      } else if (render && event.target.value === 'false') {
        const newTree = userData;
        render.map((e: string) => delete newTree[form][e]);
        setUserData({
          ...newTree,
          [form]: {
            ...userData[form],
            [event.target.name]: {
              ...userData[form][event.target.name],
              text: parseBool(event.target.value),

              error: false,
            },
          },
        });
      } else {
        setUserData({
          ...userData,
          [form]: {
            ...userData[form],
            [event.target.name]: {
              ...userData[form][event.target.name],
              text: parseBool(event.target.value),

              error: false,
            },
          },
        });
      }
    } else {
      setUserData({
        ...userData,
        [form]: {
          ...userData[form],
          [event.target.name]: {
            ...userData[form][event.target.name],
            text: event.target.value,
            error: false,
          },
        },
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

  const handleSubmit = (event: InputEvent) => {
    event.preventDefault();
    const formId = event.target.id;
    let err = false;
    const newUserData = userData[formId];
    for (let prop in userData[formId]) {
      if (
        !userData[formId][prop].text &&
        typeof userData[formId][prop].text === 'string'
      ) {
        newUserData[prop].error = true;
        newUserData[prop].errorMessage = 'cannot be empty';
        err = true;
      }
    }

    setUserData({
      ...userData,
      [formId]: newUserData,
    });

    if (!err) {
      const newSteps = [...steps];
      newSteps[activeStep].complete = true;
      setSteps(newSteps);
      if (activeStep === steps.length) {
        return;
      }
      setActiveStep(activeStep + 1);
    }
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
