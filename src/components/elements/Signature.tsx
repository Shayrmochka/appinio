import React from 'react';
import Canvas from './Canvas';
import InputDate from './InputDate';

interface SignatureProps {
  element: any;
  label: string;
}

const Signature: React.FC<SignatureProps> = ({ element, label }) => {
  return (
    <div className="signature__container">
      <Canvas
        width={'400px'}
        height={'100px'}
        label={label}
        element={element}
      />
      <InputDate
        key={element.name}
        element={element}
        //status={renderFor ? !!userData[renderFor] : true}
        status={''}
      />
    </div>
  );
};

export default Signature;
