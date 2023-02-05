import { useQuery } from 'react-query';
import DefaultPage from '../Templates/DefaultPage';
import { listRecordsByType } from '../MyApi';
import CategoryList from '../Components/CategoryList';
import SkeletonList from '../Components/RecordsList/RecordsListItems/SkeletonList';

const Vinyl = () => {
  const { data, isLoading } = useQuery(
    ['type', 'vinyl'],
    listRecordsByType('vinyl')
  );
  return (
    <DefaultPage>
      {!isLoading ? (
        <CategoryList data={data} title={'Vinyl'} />
      ) : (
        <SkeletonList />
      )}
    </DefaultPage>
  );
};

export default Vinyl;
