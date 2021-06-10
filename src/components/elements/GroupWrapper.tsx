import React from 'react';

import GroupBlock from '../elements/GroupBlock';

interface GroupWrapperProps {
  data: any;
  handleCheckBox: (event: any) => void;
}

const GroupWrapper: React.FC<GroupWrapperProps> = ({
  data,
  handleCheckBox,
}) => {
  return (
    <>
      {data.map((e: any) => (
        <GroupBlock
          key={e.id}
          groupTitle={e.groupTitle}
          groupInfo={e.groupInfo}
          handleCheckBox={handleCheckBox}
        />
      ))}
    </>
  );
};

export default GroupWrapper;
