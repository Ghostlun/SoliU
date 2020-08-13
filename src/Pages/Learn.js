import React from 'react';
import Footer from '../components/Footer';
import MentalApp from '../components/Learn/Mental_App_Link';
import FurtherApp from '../components/Learn/Further_App_Link';
const Learn = () => {
  return (
    <div>
      <div>
        <h3>
          wellcome to SoliU Website Learn Section. You can use our App without
          Phone!
        </h3>
      </div>
      <div className='mt-5'>
        <MentalApp />
      </div>
      <div className='mt-5'>
        <FurtherApp />
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default Learn;
