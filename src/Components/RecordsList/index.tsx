import { useQuery } from 'react-query';
import { getAllRecords } from '../../MyApi/api';

import 'react-loading-skeleton/dist/skeleton.css';
import Highlight from './Highlight';
import SkeletonList from './RecordsListItems/SkeletonList';
import NewReleases from './NewReleases/NewReleases';

const RecordsList = () => {
  const { data, isLoading } = useQuery('records', getAllRecords());

  const filteredRockData = data?.data.filter((obj: any) => {
    return obj.genre === 'rock';
  });

  const filteredHipHopData = data?.data.filter((obj: any) => {
    return obj.genre === 'hip hop';
  });

  const filteredSoulData = data?.data.filter((obj: any) => {
    return obj.genre === 'soul';
  });

  return (
    <>
      {isLoading && <SkeletonList />}

      {!isLoading && <NewReleases />}

      {!isLoading && <Highlight data={filteredRockData} title={'Rock'} />}
      {!isLoading && <Highlight data={filteredHipHopData} title={'Hip Hop'} />}
      {!isLoading && <Highlight data={filteredSoulData} title={'Soul'} />}
    </>
  );
};

export default RecordsList;
