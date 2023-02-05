import { useQuery } from 'react-query';
import { listJustLanded } from '../MyApi';
import DefaultPage from '../Templates/DefaultPage';

import SkeletonList from '../Components/RecordsList/RecordsListItems/SkeletonList';
import CategoryList from '../Components/AllRecordsList';

const NewReleases = () => {
  const { data, isLoading } = useQuery(
    ['category', 'new releases'],
    listJustLanded()
  );
  return (
    <DefaultPage>
      {!isLoading ? (
        <CategoryList data={data} title={'New Releases'} />
      ) : (
        <SkeletonList />
      )}
    </DefaultPage>
  );
};

export default NewReleases;
