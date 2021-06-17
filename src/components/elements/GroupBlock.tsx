import React, { useContext } from 'react';
import InputsBlock from './InputsBlock';
import CheckBoxesBlock from './CheckBoxesBlock';
import { UserDataContext } from '../../context/UserDataContext';

interface GroupBlockProps {
  groupTitle: any;
  groupInfo: any;
  form: string;
}

const GroupBlock: React.FC<GroupBlockProps> = ({
  groupTitle,
  groupInfo,
  form,
}) => {
  const { userData } = useContext(UserDataContext);

  return (
    <div>
      <p className="group-block__title">{groupTitle}</p>
      {groupInfo
        .filter((el: any) => {
          return !(
            userData[form][el.renderFor] && !userData[form][el.renderFor].text
          );
        })
        .map((e: any) =>
          e.elementsType === 'input' ? (
            <InputsBlock
              key={e.id}
              blockTitle={e.blockTitle}
              elements={e.elements}
              style={e.style}
              renderFor={e.renderFor}
              link={e.link}
              addMore={e.addMore}
              form={form}
            />
          ) : (
            <CheckBoxesBlock
              key={e.id}
              blockTitle={e.blockTitle}
              elements={e.elements}
              style={e.style}
              form={form}
              render={e.render}
            />
          )
        )}
    </div>
  );
};

export default GroupBlock;
