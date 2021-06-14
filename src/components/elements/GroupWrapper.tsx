import React from 'react';

import GroupBlock from '../elements/GroupBlock';

interface GroupWrapperProps {
  data: any;
}

const GroupWrapper: React.FC<GroupWrapperProps> = ({ data }) => {
  return (
    <>
      {data.map((e: any) => (
        <GroupBlock
          key={e.id}
          groupTitle={e.groupTitle}
          groupInfo={e.groupInfo}
        />
      ))}
    </>
  );
};

export default GroupWrapper;
