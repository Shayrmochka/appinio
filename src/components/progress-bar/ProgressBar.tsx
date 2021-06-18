import React from 'react';
import { IStep } from '../../interfaces/interfaces';
import './ProgressBar.css';

interface ProgressBarProps {
  steps: IStep[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepBar: React.FC<ProgressBarProps> = ({
  steps,
  activeStep,
  setActiveStep,
}) => {
  return (
    <div className="progress-container">
      <ul className="progress-bar">
        {steps.map((e: IStep, i: number) => (
          <li
            onClick={() => e.complete || setActiveStep(i)}
            key={i}
            className={`progress-bar__step 
            ${e.complete && 'complete'}
            ${activeStep === e.stepNumber && 'active'}
            `}
          >
            <span className="tooltiptext">{e.stepTitle}</span>
            <p
              className={`progress-bar__step-number
              ${e.complete && 'complete'}
              ${activeStep === e.stepNumber && 'active'}
            `}
            >
              {i + 1}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepBar;

// <li
//             onClick={() => setActiveStep(i)}
//             key={i}
//             className={`progress-bar__step
//             ${i < activeStep ? 'complete' : ''}
//             ${i === activeStep ? 'active' : ''}

//             `}
//           >
//             <p
//               className={`progress-bar__step-number
//               ${i < activeStep ? 'complete' : ''}
//               ${i === activeStep ? 'active' : ''}
//             `}
//             >
//               {i + 1}
//             </p>
//             {/* {e} */}
//           </li>
