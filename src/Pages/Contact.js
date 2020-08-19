import React from 'react';
import Footer from '../components/Footer';
import MainImage from '../components/Main_Image';
import ContactAll from '../components/Contact/Contact_All';
import Contact_Thing from '../components/Comp_Contact'

const Contact = () => {
  return (
    <div>
      <MainImage />
      <ContactAll />

    <Contact_Thing/>
    
      <Footer />
    </div>
  );
};

export default Contact;
