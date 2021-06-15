import React from 'react';
import './AdditionalInfo.css';

interface AdditionalInfoProps {
  handleNext: () => void;
  handleBack: () => void;
  handleSend: () => void;
  stepTitle: string;
  stepsNumber: number;
  activeStep: number;
  formId: string;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  handleNext,
  handleBack,
  handleSend,
  stepTitle,
  stepsNumber,
  activeStep,
  formId,
}) => {
  console.log(formId);
  return (
    <div className="additional-info">
      <p className="additional-info__title">Current Step:</p>
      <div className="additional-info__block block">
        <p className="block__text">{stepTitle}</p>
      </div>

      <div className="container__buttons buttons">
        {activeStep !== 0 && (
          <button className="button__back" onClick={handleBack}>
            Back
          </button>
        )}

        {activeStep !== stepsNumber - 1 ? (
          <button
            className="button__next"
            form={formId}
            type="submit"
            //onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button className="button__next" onClick={handleSend}>
            Send
          </button>
        )}
      </div>
    </div>
  );
};

export default AdditionalInfo;
