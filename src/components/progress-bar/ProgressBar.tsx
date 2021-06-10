import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  steps: any;
  activeStep: number;
}

const StepBar: React.FC<ProgressBarProps> = ({ steps, activeStep }) => {
  return (
    <div className="progress-container">
      <ul className="progress-bar">
        {steps.map((e: string, i: number) => (
          <li
            key={i}
            className={`progress-bar__step 
            ${i < activeStep ? 'complete' : ''} 
            ${i === activeStep ? 'active' : ''}`}
          >
            <p
              className={`progress-bar__step-number
              ${i < activeStep ? 'complete' : ''} 
              ${i === activeStep ? 'active' : ''}
            `}
            >
              {i + 1}
            </p>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepBar;
