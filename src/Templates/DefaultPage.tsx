import Navbar from '../Components/Navbar';

type MainProps = {
  children: JSX.Element;
};

const DefaultPage = ({ children }: MainProps) => {
  return (
    <>
      <Navbar />
      <div className="mx-auto py-5 px-24">{children}</div>
    </>
  );
};

export default DefaultPage;
