import axios from 'axios';
import { Params } from '../Types';

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
      url: `${getConfig.baseUrl}/records/genre/${newParams}`,
    });

    return response;
  }
  const response = await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/records/genre/${params}`,
  });

  return response;
};

export const listJustLanded = () => async () => {
  const response = await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/records/category/landed`,
  });

  return response;
};

export const listRecordsByType = (type: string) => async () => {
  const response = await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/records/type/${type}`,
  });

  return response;
};

export const getRecordDetails = (albumId: string | undefined) => async () => {
  const response = await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/record/${albumId}`,
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
