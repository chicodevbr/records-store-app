import { useQuery } from 'react-query';
import { listJustLanded } from '../../../MyApi';
import Highlight from '../Highlight';
import SkeletonList from '../RecordsListItems/SkeletonList';

const NewReleases = () => {
  const { data, isLoading } = useQuery('landed', listJustLanded());

  const filteredData = data?.data.filter((obj: any) => {
    return obj.category === 'landed';
  });

  return (
    <>
      {!isLoading ? (
        <Highlight data={filteredData} title={'Just Landed'} />
      ) : (
        <SkeletonList />
      )}
    </>
  );
};

export default NewReleases;
