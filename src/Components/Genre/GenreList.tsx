import { Link } from 'react-router-dom';
import { Data, PropsList } from '../../Types';
import RecordsListItems from '../RecordsList/RecordsListItems';

const GenreList = ({ data, title }: PropsList) => {
  return (
    <>
      <h3 className="text-4xl font-mono font-semi-bold m-5">{title}</h3>
      <div className="grid grid-cols-3 ml-4 mt-10">
        {data?.data.map((album: Data) => (
          <Link to={`/record/details/${album._id}`}>
            <RecordsListItems
              key={album._id}
              _id={album._id}
              name={album.name}
              artist={album.artist}
              imgUrl={album.imgUrl}
              description={album.description}
              price={album.price}
              type={album.type}
              label={album.label}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default GenreList;
