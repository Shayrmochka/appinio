import { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import Table from '../table/Table';
import GroupWrapper from './GroupWrapper';

interface CharacterBlockProps {
  characterBlock: any;
}

function CharacterBlock({ characterBlock }: CharacterBlockProps) {
  const { userData } = useContext(UserDataContext);
  return (
    <div>
      <p className="group-block__title">Character</p>
      <p className="group__title--compact">
        Each person included in this application is required to provide police
        certificates for each country in which they have lived for a cumulative
        period of 12 months or more, over the last 10 years, since turning 16
        years of age.
      </p>
      <p className="group__title--compact">
        Applicants with extensive travel histories (for example, individuals who
        have very regular short-term overseas travel for business purposes)
        should only provide the details of travel to particular countries where
        the 12 month or more cumulative threshold is likely to be met.
      </p>
      <p className="group__title--compact">
        However these applicants <strong>must</strong> provide a{' '}
        <strong>full list</strong> of their entire travel history, including
        dates, to all countries in the last 10 years in a separate document
        attached to this application. Failing to do so will slow down visa
        processing times and reflect a failure to declare all relevant
        information to the Department.
      </p>

      <GroupWrapper data={characterBlock} />
      {userData['thirdStep']['14-cumulative-period'].text && <Table />}
    </div>
  );
}

export default CharacterBlock;
