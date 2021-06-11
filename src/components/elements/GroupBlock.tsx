import React from 'react';
import InputsBlock from './InputsBlock';
import CheckBoxesBlock from './CheckBoxesBlock';

interface GroupBlockProps {
  groupTitle: any;
  groupInfo: any;
  handleCheckBox: (event: any) => void;
}

const GroupBlock: React.FC<GroupBlockProps> = ({
  groupTitle,
  groupInfo,
  handleCheckBox,
}) => {
  const onClick = (e: any) => console.log(e.target.dataset.nicCage);

  return (
    <div>
      <p className="group-block__title">{groupTitle}</p>
      {groupInfo.map((e: any) =>
        e.elementsType === 'input' ? (
          <InputsBlock
            key={e.id}
            blockTitle={e.blockTitle}
            elements={e.elements}
          />
        ) : (
          <CheckBoxesBlock
            onClick={onClick}
            key={e.id}
            blockTitle={e.blockTitle}
            elements={e.elements}
            style={e.style}
            handleCheckBox={handleCheckBox}
          />
        )
      )}
    </div>
  );
};

export default GroupBlock;
