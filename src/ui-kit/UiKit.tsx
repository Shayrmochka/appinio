import React, { useState } from 'react';
import GroupWrapper from '../components/elements/GroupWrapper';
import Input from '../components/elements/Input';
import InputDate from '../components/elements/InputDate';
import InputSelect from '../components/elements/InputSelect';
import Signature from '../components/elements/Signature';
import ProgressBar from '../components/progress-bar/ProgressBar';

import './UiKit.css';

const inputs = [
  {
    id: '1000',
    form: 'firstStep',
    groupTitle: 'GroupTitle',
    groupInfo: [
      {
        id: '1001',
        blockTitle: 'BlockTitle',
        elementsType: 'input',
        style: 'form__group--without-border',
        elements: [
          {
            name: '1-family-name',
            placeholder: 'Family name',
          },
          {
            name: '1-given-names',
            placeholder: 'Given names',
          },
          {
            name: '1-dateOfBirth',
            type: 'date',
            placeholder: 'Date of birth',
          },
          {
            name: '1-passport',
            placeholder: 'Passport number',
          },
          {
            name: '3-place-of-birth',
            country: '3-country',
            region: '3-region',
            type: 'select',
            placeholder: 'Place of birth',
          },
        ],
      },
    ],
  },
];

const inputSelect = [
  {
    id: '1000',
    form: 'firstStep',
    groupTitle: 'GroupTitle',
    groupInfo: [
      {
        id: '3006',
        blockTitle: 'Place of birth',
        elementsType: 'input',
        elements: [
          {
            name: '3-place-of-birth',
            country: '3-country',
            region: '3-region',
            type: 'select',
            placeholder: 'Place of birth',
          },
        ],
      },
    ],
  },
];

const checkbox = [
  {
    id: '1000',
    form: 'firstStep',
    groupTitle: 'GroupTitle',
    groupInfo: [
      {
        id: '3004',
        blockTitle: 'Sex',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-male',
            name: '3-gender',
            value: '3-male',
            label: 'Male',
          },
          {
            id: '3-female',
            name: '3-gender',
            value: '3-female',
            label: 'Female',
          },
          {
            id: '3-unspecified',
            name: '3-gender',
            value: '3-unspecified',
            label: 'Unspecified',
          },
        ],
      },
      {
        id: '3002',
        blockTitle:
          'Have they been known by any other names? (including name at birth, previous married names, aliases)',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-no',
            name: '3-other-names',
            value: false,
            label: 'No',
            checked: false,
          },
          {
            id: '3-yes',
            name: '3-other-names',
            value: true,
            label: 'Yes',
            checked: false,
          },
        ],
      },
      {
        id: '3003',
        renderFor: '3-other-names',
        blockTitle: 'Give details',
        elementsType: 'input',
        style: 'form__group--without-border',
        elements: [
          {
            name: '3-other-family-name',
            placeholder: 'Family name',
            disabled: true,
          },
          {
            name: '3-other-given-names',
            placeholder: 'Given names',
            disabled: false,
          },
        ],
      },
    ],
  },
];

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
];

function UiKit() {
  const [activeStep, setActiveStep] = useState(0);
  const [signatyres, setSignatyres] = useState([1]);

  const addSignatyres = (event: any) => {
    event.preventDefault();
    setSignatyres([...signatyres, signatyres.length + 1]);
  };

  const deleteSignatyres = (event: any) => {
    event.preventDefault();
    const deleted = signatyres.filter((e) => e !== signatyres.length);
    setSignatyres(deleted);
  };
  return (
    <div className="kit__wrapper">
      <div>
        <h1>UI-Kit</h1>
        <div className="survey">
          <ProgressBar
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>
        <div className="kit__inputs-container">
          <p className="block__titles">Inputs</p>

          <div className="step-wrapper">
            <div className="group">
              <p className="group__title">Group Inputs</p>
              <p>Props: 'data : Array'</p>
              <form className="form" id="firstStep">
                <GroupWrapper data={inputs} />
              </form>
            </div>
            <div className="group">
              <p className="group__title">Standalone inputs</p>
              <p>Props: 'element : Array', 'status: Boolean' </p>
              <form className="form" id="firstStep">
                <Input
                  element={inputs[0].groupInfo[0].elements[0]}
                  status={false}
                  form={inputs[0].form}
                />
                <Input
                  element={inputs[0].groupInfo[0].elements[0]}
                  status={true}
                  form={inputs[0].form}
                />
                <InputDate
                  element={inputs[0].groupInfo[0].elements[2]}
                  status={true}
                  form={inputs[0].form}
                />
                <InputSelect
                  element={inputSelect[0].groupInfo[0].elements[0]}
                  status={true}
                  form={inputs[0].form}
                />
              </form>
            </div>
          </div>
          <div className="step-wrapper">
            <p className="block__titles">Checkboxes</p>
            <div className="group">
              <p>Props: 'data : Array'</p>
              <form className="form" id="firstStep">
                <GroupWrapper data={checkbox} />
              </form>
            </div>
          </div>
          <div className="step-wrapper">
            <p className="block__titles">Signatures</p>
            <p>
              Props: 'element: {'{name: String, type: String}'}', label:
              'String'
            </p>
            <form className="form " id="sixthStep">
              <div className="form__group--padding group">
                <Signature
                  element={{ name: '21-primary-signature', type: 'date' }}
                  label={'Signature of primary person'}
                />

                {signatyres.map((e) => (
                  <Signature
                    key={e}
                    element={{
                      name: `21-secondary-signature-${e}`,
                      type: 'date',
                    }}
                    label={'Signature'}
                  />
                ))}

                <button className="button__back" onClick={deleteSignatyres}>
                  Delete Person
                </button>
                <button className="button__next" onClick={addSignatyres}>
                  Add Person
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UiKit;
