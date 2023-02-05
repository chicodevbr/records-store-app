import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getRecordDetails } from '../../MyApi/api';
import RecordDetailItem from '../RecordDetailItem';
import Loading from '../../UI/Loading';
import DefaultPage from '../../Templates/DefaultPage';

const RecordDetails = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const { data, isLoading } = useQuery(
    ['record-detail', albumId],
    getRecordDetails(albumId)
  );

  return (
    <DefaultPage>
      {!isLoading ? (
        <RecordDetailItem
          _id={data?.data._id}
          name={data?.data.name}
          artist={data?.data.artist}
          imgUrl={data?.data.imgUrl}
          price={data?.data.price}
          description={data?.data.description}
          type={data?.data.type}
          label={data?.data.label}
        />
      ) : (
        <Loading />
      )}
    </DefaultPage>
  );
};

export default RecordDetails;
