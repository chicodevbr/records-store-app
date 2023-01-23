import React from 'react';
import Navbar from '../Components/Navbar';

type MainProps = {
  children: JSX.Element;
};

const DefaultPage = ({ children }: MainProps) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default DefaultPage;
