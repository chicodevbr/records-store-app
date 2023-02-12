import { useNavigate } from 'react-router-dom';
import { PropsCartItem } from '../../../Types';

const CartItem = (props: PropsCartItem) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/order');
  };

  return (
    <div className="card-body">
      <span className="font-bold text-lg">{props.quantity}</span>
      <span className="text-info">Total: ${props.price}</span>

      <div className="card-actions">
        <button className="btn btn-secondary mx-auto" onClick={handleSubmit}>
          View cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
