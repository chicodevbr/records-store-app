import { OrderProps } from '../../../Types';

const Card = (props: OrderProps) => {
  return (
    <div
      className="card lg:card-side bg-base-100 shadow-xl mb-2"
      key={props.id}
    >
      <figure className="w-24 m-5">
        <img src={props.imgUrl} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold">{props.name}</h2>
        <p>Quantity: {props.quantity}</p>
        <p>Total: {props.total}</p>
      </div>
    </div>
  );
};

export default Card;
