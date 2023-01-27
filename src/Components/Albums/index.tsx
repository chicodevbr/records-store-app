import { useEffect, useState } from 'react';
import { getAPI } from '../../Api';

interface Response {
  _id: string;
  album: string;
  date: string;
  description: string;
  label: string;
  name: string;
  price: string;
  quantity: string;
  reviews: any;
  tracks: string;
  type: string;
  year: string;
}

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
    <div>
      {data.map((album: Response) => (
        <div key={album._id}>{album.album}</div>
      ))}
    </div>
  );
};

export default Albums;
