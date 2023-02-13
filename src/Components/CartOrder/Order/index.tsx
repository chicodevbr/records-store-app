import { OrderFinalProps } from '../../../Types';

const Order = (props: OrderFinalProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl font-mono">
      <div className="card-body">
        <h2 className="card-title">Order</h2>
        <div className="bg-slate-100 p-2 rounded">
          <p>Quantity: {props.quantity}</p>
          <p>Tax included</p>
          <p>Total: {props.total}</p>
        </div>

        <div className="card-actions justify-center">
          <button className="btn btn-secondary">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
