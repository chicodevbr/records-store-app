import { Data } from '../../../Api';
import RecordsListItems from '../RecordsListItems';

interface Props {
  title: string;
  data: [Data] | any;
}

const Highlight = ({ data, title }: Props) => {
  return (
    <>
      <h3 className="text-4xl font-mono font-semi-bold m-5">{title}</h3>
      <div className="grid grid-cols-3 ml-4 mt-10">
        {data.slice(0, 3).map((album: Data) => (
          <RecordsListItems
            key={album._id}
            _id={album._id}
            name={album.name}
            artist={album.artist}
            imgUrl={album.imgUrl}
            description={album.description}
            price={album.price}
            type={album.type}
          />
        ))}
      </div>
    </>
  );
};

export default Highlight;
