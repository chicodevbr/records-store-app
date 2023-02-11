import { PropsCartItem } from '../../../Types';

const CartItem = (props: PropsCartItem) => {
  return (
    <div className="card-body">
      <span className="font-bold text-lg">{props.quantity}</span>
      <span className="text-info">Subtotal: ${props.price}</span>

      <div className="card-actions">
        <button className="btn btn-primary btn-block">View cart</button>
      </div>
    </div>
  );
};

export default CartItem;
