import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../asset/css/style.css';
import * as emailjs from "emailjs-com"




export default class Comp_Contact extends Component {

 constructor(props) {

  super(props)
  
  this.state = { name : null, phone : null, email :null}

 }

handleChange = (e) => {

  this.setState({[e.target.name] : e.target.value})
  console.log("Check the change", e.target.name)
}

handleSubmit = (e) => {

  e.preventDefault();

  emailjs.sendForm (

    "gmail",
    "test",
    "className",
    "user_64cUFNeBdOXAD4QZWBXWY"
  ).then()
  .catch(); 
  this.setState({
    name:"",
    phone: "",
    email: ""
  })
}
 




  firstLine = () => {


    return <div>
      {/* Get data from */}
      <br></br>
      <div className="CONTACT-US" style={{ marginTop: "50px" }}> CONTACT US </div> <br></br>
      <form onSubmit={this.handleSubmit}>
      <p><input type='text' placeholder="first" name="name"  value = {this.state.name} onChange={this.handleChange} /> </p>

      <div className="CONTACT-US"> E-mail </div><br></br>
      <p><input type='text' placeholder="Email" name="email" size="80" onChange={this.handleChange} value = {this.state.email} /> </p>


      <div className="CONTACT-US"> Comment</div><br></br>
        <p><input type='text' placeholder="Comment" name="phone" size="80" style={{ height: "300" }}  value = {this.state.phone} onChange={this.handleChange} /> </p>
     
      </form>

      <button className="submit-icon">Submit</button>


    </div>
  }

  seconeLine = () => {




    return <div>
      {/* Get data from */}
      <br></br>
      <div className="CONTACT-US" style={{ marginTop: "90px" }}> Get in Touch</div> <br></br>


      <div className="CONTACT-US"> Address </div><br></br>
      <div className="info" > School of Communication and Journalism
      Auburn University
        <br></br>
        <br></br>

        237 Tichenor Hall
        Auburn AL 36849-5206</div>

      <div className="CONTACT-US"> Join the team</div><br></br>
      <p> Dr. Myoung-Gi Chon <br></br>
      Tel: 33-844-2721 <br></br>
      mzc0113@auburn.edu
      </p>




    </div>
  }



  render() {

    return (


      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 20,
          padding: 10,
          marginTop: '-4em'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {this.firstLine()}
        </div>



        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
        </div>
        {this.seconeLine()}
      </div>
    );

  }


}