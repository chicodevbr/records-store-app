import axios from 'axios';

interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}

export interface Data {
  _id: string;
  artist: string;
  date: string;
  description: string;
  label: string;
  name: string;
  price: string;
  genre: string;
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

export const getAllRecords = () => async () => {
  const response = await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${'records'}`,
  });

  return response;
};

export const listRecordsByGenre = (params: string | undefined) => async () => {
  if (params === 'hip-hop') {
    const newParams = params.replace('-', ' ');

    const response = await axios({
      ...getConfig,
      url: `${getConfig.baseUrl}/records/${newParams}`,
    });

    return response;
  }
  const response = await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/records/${params}`,
  });

  return response;
};

export const getAPIFiltered = async (url: string, params: string) => {
  return axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${url}/${params}`,
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
