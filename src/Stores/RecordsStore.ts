import { observable, action } from 'mobx';
import { Data, getAPI } from '../Api';

interface IResponse {
  status: number;
  data: Data;
}

interface IStore {
  loading: boolean;
  data: null | Data;
  error: any;
  fetch: AsyncCallbackFunction;
}

type AsyncApiCallbackFunction = (input: string) => Promise<IResponse>;
type AsyncCallbackFunction = (input: string) => Promise<void>;

const createAsyncOp = (api: AsyncApiCallbackFunction) => {
  const store: IStore = observable({
    loading: false,
    data: null,
    error: null,
    fetch: action(async function (input: string) {
      try {
        store.loading = true;
        store.error = null;
        store.data = null;

        const response = await api(input);
        const json = await response.data;
        if (response.status === 200) {
          store.data = json;
        } else {
          store.error = json;
        }
      } catch (error) {
        store.error = error;
        throw error;
      } finally {
        store.loading = false;
      }
    }),
  });
  return store;
};

export const asyncOp = createAsyncOp(() => getAPI('records'));
