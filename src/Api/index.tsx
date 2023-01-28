import axios from 'axios';

interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}

export interface Data {
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
  imgUrl: string;
}

const getConfig: Params = {
  baseUrl: 'https://records.onrender.com/api/v1',
  headers: {
    Authorization: '',
  },
  method: 'get',
};

export const getAPI = async (url: string): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${url}`,
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        status: error.status,
        data: error.response,
      };
    });
};
