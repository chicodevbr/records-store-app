import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { listRecordsByGenre } from '../../MyApi';
import GenreList from './GenreList';
import SkeletonList from '../RecordsList/RecordsListItems/SkeletonList';
import DefaultPage from '../../Templates/DefaultPage';

const capitalize = (str: string | undefined) => {
  if (str === undefined) {
    return;
  }

  const capitalLetter = str.charAt(0).toUpperCase();
  const capitalWord = capitalLetter + str.slice(1);

  return capitalWord;
};

const Genre = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading } = useQuery(
    ['genre', name],
    listRecordsByGenre(name)
  );

  const title = capitalize(name);

  return (
    <DefaultPage>
      {!isLoading ? <GenreList data={data} title={title} /> : <SkeletonList />}
    </DefaultPage>
  );
};

export default Genre;
