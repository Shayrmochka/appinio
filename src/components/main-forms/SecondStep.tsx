import React, { useEffect, useState } from 'react';
import GroupWrapper from '../elements/GroupWrapper';
import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';

import { dataSecond as data } from '../../data';
import './Steps.css';

interface SecondStepProps {
  handleSubmit: (event: any) => void;
}

const SecondStep = ({ handleSubmit }: SecondStepProps) => {
  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form" id="secondStep" onSubmit={handleSubmit}>
        <GroupWrapper data={data} />
        <p className="group__title--compact">
          4. For each person included in the application, provide evidence of
          birth certificate, marriage certificate, or de facto relationship.
        </p>
        <p className="group__title--compact">
          If any secondary persons were not included in the nomination
          application made by the primary person’s sponsor, attach written
          confirmation from the primary person’s sponsor that they agree to
          include the applicants as secondary sponsored persons in relation to
          them and that they are aware that their sponsorship obligations extend
          to these applicants.
        </p>
        <p className="group__title--compact">
          For any dependent child included in the application, provide evidence
          of legal responsibility for that child, such as court orders, child
          custody documents and/or form 1229 Consent to grant an Australian visa
          to a child under the age of 18 years. Form 1229 is available from the
          Department’s website <strong>www.homeaffairs.gov.au/allforms/</strong>
        </p>
      </form>
    </div>
  );
};

export default SecondStep;
