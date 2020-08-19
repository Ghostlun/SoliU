import React from 'react';
import Footer from '../components/Footer';
import LearnAll from '../components/Learn/Learn_All';
import Line1 from '../asset/image/guideline_research.png';
import Line2 from '../asset/image/guideline_research_2.png';
import Diagram from '../asset/image/diagram.png';
import '../asset/css/style.css';
const Learn = () => {
  return (
    <div>
      <div className='RESEARCH'>RESEARCH</div>
      <div style={{ marginBottom: '3em' }}>
        <img
          src={Line1}
          alt='Line1'
          style={{
            width: '1080px',
            height: '4px'
          }}
        />
      </div>
      <div className='rowC'>
        <div>
          <div className='RESEARCH  mb-3'>PROJECTS</div>
          <div style={{ marginBottom: '3em' }}>
            <img
              className='RESEARCH '
              src={Line2}
              alt='Line2'
              style={{
                width: '220px',
                height: '4px'
              }}
            />
          </div>
          <div>
            <LearnAll />
          </div>
        </div>
        <div className='ml-5'>
          <text>
            <h5>Our researches mainly focused on three area.</h5>
            <h5> 1. Risk-Crisis Communication</h5>
            <h5> 2. Health Communication </h5>
            <h5> 3. Social Media Activism    </h5> 
          </text>
        </div>
        <div style={{ marginBottom: '3em' }}>
          <img
            src={Diagram}
            alt='Diagram'
            style={{ width: '441px', height: '397px' }}
          />
        </div>
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default Learn;
