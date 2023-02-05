import { useQuery } from 'react-query';
import { getAllRecords } from '../MyApi/api';
import AllRecordsList from '../Components/AllRecordsList';
import SkeletonList from '../Components/RecordsList/RecordsListItems/SkeletonList';
import DefaultPage from '../Templates/DefaultPage';

const AllRecords = () => {
  const { data, isLoading } = useQuery(['records', 'all'], getAllRecords());

  return (
    <DefaultPage>
      {!isLoading ? (
        <AllRecordsList data={data} title={'All Records'} />
      ) : (
        <SkeletonList />
      )}
    </DefaultPage>
  );
};

export default AllRecords;
