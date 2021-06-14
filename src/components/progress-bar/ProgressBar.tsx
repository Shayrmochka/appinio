import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  steps: any;
  activeStep: number;
  setActiveStep: any;
}

const StepBar: React.FC<ProgressBarProps> = ({
  steps,
  activeStep,
  setActiveStep,
}) => {
  return (
    <div className="progress-container">
      <ul className="progress-bar">
        {steps.map((e: any, i: number) => (
          <li
            onClick={() => setActiveStep(i)}
            key={i}
            className={`progress-bar__step 
            ${e.complete && 'complete'}
            ${activeStep === e.stepNumber && 'active'}
            `}
          >
            <p
              className={`progress-bar__step-number
              ${e.complete && 'complete'}
              ${activeStep === e.stepNumber && 'active'}
            `}
            >
              {i + 1}
            </p>
            {/* {e} */}
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
