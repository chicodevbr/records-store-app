import { useEffect, useState } from 'react';
import { Data, getAPI } from '../../Api';
import RecordsItems from './RecordsItems';

const RecordsList = () => {
  const [data, setData] = useState([]);

  const getData = () =>
    getAPI('records').then((res) => {
      if (res.status === 200) {
        setData(res.data);
      } else {
        console.log(res);
      }
    });

  useEffect(() => {
    getData();
  }, []);

  const filteredRockData = data.filter((obj: any) => {
    return obj.genre === 'rock';
  });

  const filteredHipHopData = data.filter((obj: any) => {
    return obj.genre === 'hip hop';
  });

  return (
    <>
      <h3 className="text-4xl font-mono font-semi-bold m-5">Rock</h3>
      <div className="grid grid-cols-3 ml-4 mt-10">
        {filteredRockData.slice(0, 3).map((album: Data) => (
          <RecordsItems
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

      <h3 className="text-4xl font-mono font-semi-bold m-5">Hip Hop</h3>
      <div className="grid grid-cols-3 ml-4 mt-10">
        {filteredHipHopData.slice(0, 3).map((album: Data) => (
          <RecordsItems
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

export default RecordsList;
