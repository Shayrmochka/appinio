import React, { useContext, useState } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import { ButtonEvent } from '../../interfaces/interfaces';
import ScrollToTopOnMount from '../../utilites/ScrollToTopOnMount';
import Signature from '../elements/Signature';
import './Steps.css';

interface SixthStepProps {
  handleSubmit: (event: any) => void;
}

const SixthStep = ({ handleSubmit }: SixthStepProps) => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [signatyres, setSignatyres] = useState([1]);

  const addSignatyres = (event: ButtonEvent) => {
    event.preventDefault();
    setUserData({
      ...userData,
      sixthStep: {
        ...userData['sixthStep'],
        [`21-signature-${signatyres.length + 1}`]: {
          text: '',
          signature: {
            x: [],
            y: [],
          },
          error: false,
          errorMessage: '',
        },
      },
    });

    setSignatyres([...signatyres, signatyres.length + 1]);
  };
  // new Date().toISOString().substring(0, 10)
  const deleteSignatyres = (event: ButtonEvent) => {
    event.preventDefault();
    const deleted = signatyres.filter((e) => e !== signatyres.length);
    setSignatyres(deleted);
  };

  return (
    <div className="step-wrapper">
      <ScrollToTopOnMount />
      <form className="form " id="sixthStep" onSubmit={handleSubmit} noValidate>
        <div className="form__group--padding group">
          <p className="group-block__title">
            {' '}
            Part E – Declaration and consent
          </p>
          <p className="group__title--compact">
            <strong>Note</strong>: This declaration and consent must be read and
            signed by the primary person and any secondary persons included in
            this application who are aged 18 years or over.
          </p>
          <ul>
            <strong>WARNING</strong>: Giving false or misleading information is
            a serious offence.
            <li>
              I have truthfully answered all details requested of me in this
              application;
            </li>
            <li>
              in any part of this form that has been completed with the
              assistance of another person, the information as set down is true
              and correct and has been included with my full knowledge, consent
              and understanding;
            </li>
            <li>
              I understand that if any fraudulent or misleading documents or
              information is found, this application is likely to be refused and
              I may be subject to a bar period;
            </li>
            <li>
              I understand that if I have indicated on this form that I want my
              application to be withdrawn in certain circumstances and my
              application is withdrawn as a result, I will forego any review
              rights which I may have been entitled to if my application had not
              been withdrawn;
            </li>
            <li>I agree to abide by all conditions imposed on my visa;</li>
            <li>
              I agree to notify the Department of any material change in
              circumstances;
            </li>
            <li>
              I will respect Australian values as listed on this form, during my
              stay in Australia and will obey the laws of Australia;
            </li>
            <li>
              I have read the information contained in form 1442i Privacy
              notice;
            </li>
            <li>
              I understand the Department may collect, use and disclose my
              personal information (including biometric information and other
              sensitive information) as outlined in form 1442i Privacy notice
            </li>
          </ul>

          <ul>
            For offshore applicants who are required to provide their
            fingerprints and facial image:
            <li>
              I understand that my fingerprints and facial image and my
              biographical information held by the Department may be given to
              Australian law enforcement agencies to help identify me, to help
              determine my eligibility for grant of the visa I have applied for,
              and for law enforcement purposes.
            </li>
            <li>
              I consent to:
              <ul>
                <li>
                  Australian law enforcement agencies disclosing my biometric,
                  biographical and criminal record information to the Department
                  for any of the purposes outlined above; and
                </li>
                <li>
                  the Department using the information obtained for the purposes
                  of the Migration Act 1958 or the Australian Citizenship Act
                  2007
                </li>
              </ul>
            </li>
          </ul>
          <Signature
            element={{
              name: '21-primary-signature',
              type: 'date',
              placeholder: 'Date',
            }}
            label={'Signature of primary person'}
          />

          {signatyres.map((e) => (
            <Signature
              key={e}
              element={{
                name: [`21-signature-${signatyres.length}`],
                type: 'date',
                placeholder: 'Date',
              }}
              label={'Signature'}
            />
          ))}

          <div className="buttons__wrapper">
            <button className="button__delete" onClick={deleteSignatyres}>
              Delete Person
            </button>
            <button className="button__add" onClick={addSignatyres}>
              Add Person
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SixthStep;
