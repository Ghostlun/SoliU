import React, { Fragment } from 'react';

import MainImage from '../components/Main_Image';
import Footer from '../components/Footer';
import ThreeCloumn from '../components/ThreeColumn';
const HomeFirst = () => {
  return (
    <Fragment>
      <MainImage />
      <ThreeCloumn />
      <Footer />
    </Fragment>
  );
};

export default HomeFirst;
