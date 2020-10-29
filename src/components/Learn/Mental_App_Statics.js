import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Firebase from 'firebase';

class Mental_App_Statics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      developers: [],
    };
  }
  getUserData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  render() {
    return <div></div>;
  }
}

export default Mental_App_Statics;
