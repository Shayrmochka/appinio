import React, { useState } from 'react';
import InputsBlock from './InputsBlock';
import CheckBoxesBlock from './CheckBoxesBlock';

interface GroupBlockProps {
  groupTitle: any;
  groupInfo: any;
}

const GroupBlock: React.FC<GroupBlockProps> = ({ groupTitle, groupInfo }) => {
  return (
    <div>
      <p className="group-block__title">{groupTitle}</p>
      {groupInfo.map((e: any) =>
        e.elementsType === 'input' ? (
          <InputsBlock
            key={e.id}
            blockTitle={e.blockTitle}
            elements={e.elements}
            style={e.style}
            renderFor={e.renderFor}
          />
        ) : (
          <CheckBoxesBlock
            key={e.id}
            blockTitle={e.blockTitle}
            elements={e.elements}
            style={e.style}
            // handleChange={handleChange}
            // checkbox={checkbox}
          />
        )
      )}
    </div>
  );
};

export default GroupBlock;
