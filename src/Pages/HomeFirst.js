import React, { Fragment } from 'react';

import Main_Image from '../components/Main_Image';
import Footer from '../components/Footer';
import ThreeCloumn from '../components/ThreeColumn';
const HomeFirst = () => {
  return (
    <Fragment>
      <Main_Image />
      <ThreeCloumn />
      <Footer />
    </Fragment>
  );
};

export default HomeFirst;
