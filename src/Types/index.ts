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
  tracks: string;
  type: string;
  year: string;
  imgUrl: string;
}

export interface PropsList {
  title: string | undefined;
  data: [Data] | any;
}

export interface IAlbum {
  _id: string;
  imgUrl: string;
  name: string;
  artist: string;
  type: string;
  description: string;
  price: string;
  label: string;
}

export interface IAlbumList {
  _id: string;
  imgUrl: string;
  name: string;
  artist: string;
  type: string;
  description: string;
  price: string;
}

export interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}
