const Card = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-2">
      <figure className="w-24 m-5">
        <img
          src="https://res.cloudinary.com/yetlabs/image/upload/v1675601171/records/mowgli_c3ejjg.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold">New album is released!</h2>
        <p>Quantity: </p>
        <p>Total: </p>
      </div>
    </div>
  );
};

export default Card;
