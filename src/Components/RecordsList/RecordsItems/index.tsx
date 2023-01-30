interface IAlbum {
  _id: string;
  imgUrl: string;
  name: string;
  artist: string;
  type: string;
  description: string;
  price: string;
}

const RecordsItems = (props: IAlbum) => {
  return (
    <div key={props._id} className="card w-96 bg-base-100 shadow-xl mb-8">
      <figure>
        <img src={props.imgUrl} alt={props.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.artist}: {props.name}
          <div className="badge badge-secondary">{props.type}</div>
        </h2>
        <p>{props.description}</p>
        <p className="font-mono font-semibold text-secondary-focus">
          ${props.price}
        </p>
      </div>
    </div>
  );
};

export default RecordsItems;
