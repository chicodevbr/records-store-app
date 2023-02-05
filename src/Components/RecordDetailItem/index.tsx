import { IAlbum } from '../../Types';

const RecordDetailItem = (props: IAlbum) => {
  return (
    <div className="container mx-auto px-4 mt-5 ">
      <div className="columns-3">
        <figure className="w-96">
          <img src={props.imgUrl} />
        </figure>
        <div>
          <h1 className="text-4xl font-bold">
            {props.artist}: {props.name}
          </h1>
        </div>

        <div className="mt-5">
          <h4 className="text-md font-mono">Price </h4>
          <p className="text-2xl font-semibold text-secondary-focus">
            $ {props.price}
          </p>
          <p className="text-sm mt-5">Tax included.</p>
        </div>

        <div className="mt-5 form-control">
          <form action="">
            <div className="input-group"></div>
            <label htmlFor="">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              max="5"
              value="1"
              className=" px-2"
            />

            <div className="mt-5">
              <button className="btn btn-secondary mx-auto">Add to Cart</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-5">
        <div className="flex">
          <h4 className="text-1xl font-bold font-mono">Title: </h4>
          <p className="px-2"> {props.description}</p>
        </div>
        <div className="flex">
          <h4 className="text-1xl font-bold font-mono">Label: </h4>
          <p className="px-2"> {props.label}</p>
        </div>
        <div className="flex">
          <h4 className="text-1xl font-bold font-mono">Product-type: </h4>
          <p className="px-2"> {props.type}</p>
        </div>

        <div className="flex">
          <p className="mt-5"> {props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecordDetailItem;
