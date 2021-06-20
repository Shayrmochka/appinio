import React from 'react';
import './AdditionalInfo.css';

interface AdditionalInfoProps {
  handleBack: () => void;
  stepTitle: string;
  stepsNumber: number;
  activeStep: number;
  formId: string;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  handleBack,
  stepTitle,
  stepsNumber,
  activeStep,
  formId,
}) => {
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

        <button className="button__next" form={formId} type="submit">
          {activeStep !== stepsNumber - 1 ? 'Next' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfo;
