import { useEffect, useState } from 'react';
import { Data, getAPI } from '../../Api';

const Albums = () => {
  const [data, setData] = useState([]);

  const getData = () =>
    getAPI('album').then((res) => {
      if (res.status === 200) {
        setData(res.data);
      } else {
        console.log(res);
      }
    });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-3 ml-4 mt-10">
      {data.map((album: Data) => (
        <div key={album._id} className="card w-96 bg-base-100 shadow-xl mb-8">
          <figure>
            <img src={album.tracks} alt={album.album} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {album.name}: {album.album}
              <div className="badge badge-secondary">{album.type}</div>
            </h2>
            <p>{album.description}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Albums;
