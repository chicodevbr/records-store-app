import { useQuery } from 'react-query';
import { listRecordsByType } from '../MyApi/api';
import DefaultPage from '../Templates/DefaultPage';
import CategoryList from '../Components/AllRecordsList';
import SkeletonList from '../Components/RecordsList/RecordsListItems/SkeletonList';

const CompactDisc = () => {
  const { data, isLoading } = useQuery(
    ['type', 'vinyl'],
    listRecordsByType('CD')
  );
  return (
    <DefaultPage>
      {!isLoading ? (
        <CategoryList data={data} title={'Compact Disc'} />
      ) : (
        <SkeletonList />
      )}
    </DefaultPage>
  );
};

export default CompactDisc;
