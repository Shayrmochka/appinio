import React from 'react';
import './AdditionalInfo.css';

interface AdditionalInfoProps {
  handleNext: () => void;
  handleBack: () => void;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  handleNext,
  handleBack,
}) => {
  return (
    <div className="additional-info">
      <p className="additional-info__title">Additinal info</p>
      <div className="additional-info__block block">
        <p className="block__description">Preis pro Teilnehmer</p>
        <p className="block__text">20 Credits</p>
      </div>
      <div className="additional-info__block block">
        <p className="block__description">Anzahl Teilnehmer</p>
        <p className="block__text--small">600</p>
        <p className="block__description">Basisprels</p>
        <p className="block__text--small">1 credit</p>
        <p className="block__description">Zeilgruppe ausgewahit</p>
        <p className="block__text--small">1 credit</p>
      </div>
      <div className="additional-info__block block">
        <div className="container__buttons buttons">
          <button className="button__back" onClick={handleBack}>
            Back
          </button>
          <button className="button__next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
