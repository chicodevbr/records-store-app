import Skeleton from 'react-loading-skeleton';

const SkeletonList = () => {
  return (
    <div className="grid grid-cols-3 ml-4 mt-10">
      {Array(9)
        .fill(0, 1, 8)
        .map((item, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl mb-8">
            <figure></figure>
            <div className="card-body">
              <Skeleton height={250} />

              <Skeleton />

              <Skeleton />

              <Skeleton />

              <Skeleton />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonList;
