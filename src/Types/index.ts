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

export interface PropsList {
  title: string | undefined;
  data: [Data] | any;
}

export interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}
