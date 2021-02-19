import React, { Component } from 'react';
import mentalData from '../data.json';
import '../../asset/css/style.css';
import { Row } from 'react-bootstrap';

export default class Mental_Comp_info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Mouseclicked: 'false',
      Mental_Id: 0,
      Mental_Info: null
    };
  }

  //When id button is choosen
  button_Clicked = (id, info) => {
    var MentalID = id;
    var MentalInfo = info;

    this.setState({
      Mouseclicked: 'true',
      Menta_Id: MentalID,
      Mental_Info: MentalInfo
    });

  };

  Menu_button_Clicked = () => {
   
    if (this.state.Mouseclicked = 'false') {

      window.history.back();
    }
    this.setState({ Mouseclicked: 'false' });


  
    console.log('to the Menu');
  };

  displayMenu = () => {
    if (this.state.Mouseclicked === 'false')
      return (
        <div>
            {mentalData.map(c => {
              return (
                <button
                  onClick={() => this.button_Clicked(c.id, c.info, c.refer)}
                  className='Mental_App_button'
                  style={{ width: 500 }}
                >
                  {' '}
                  {c.Name}
                  <br></br>
                </button>
              );
            })}
        </div>
      );
    else return <div>{this.state.Mental_Info}</div>;
  };

  render() {
    return (
          <div>
            {/* Get data from */}
              <h4> Learn about Mental Illness</h4>

            {this.displayMenu()}
     <div>

          <button style = {{  display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50px',
        backgroundColor: "#448aca", color:"white",
        border: "none"  }}onClick={() => this.Menu_button_Clicked()}>
          To the menu
          </button>
          </div>
          </div>
    );
  }
}
