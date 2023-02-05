import { IAlbum } from '../../../Types';

const RecordsListItems = (props: IAlbum) => {
  return (
    <div key={props._id} className="card w-96 bg-base-100 shadow-xl mb-8">
      <img src={props.imgUrl} alt={props.name} />

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

export default RecordsListItems;
