import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../asset/css/style.css';
import * as emailjs from "emailjs-com"




export default class Comp_Contact extends Component {

 constructor(props) {

  super(props)
  
  this.state = { name : null, comment : null, email :null, 
  emailSent: "false"}

 }


emailConfirmation = () => {

  if (this.state.emailSent == "true") 
  return <div><center>Your email is delivered </center></div>

  else return <div></div>
}



handleChange = (e) => {

  let nam =  e.target.name;
  let val = e.target.value;
  // let pho = e.target.phone;

  this.setState({ [nam] : val})
  console.log("Check the change for name", this.state.name)
  console.log("Check the change for email", this.state.email)
  console.log("Check the change for comment", this.state.comment)

}

handleSubmit = (e) => {

  e.preventDefault();

  emailjs
    .sendForm ("gmail","test", e.target, "user_64cUFNeBdOXAD4QZWBXWY"
  ).then(res => {

    this.setState({
      email: "",  
      name: "",
      comment: "",
      emailSent: "true"
    })

    document.getElementById("formID").reset()
    

    console.log("It sent sucessuflly")
    
  })

  .catch(err => {"Something error happnes"}); 
 

  console.log("Submit button ", this.state.name)
}
 



  firstLine = () => {


    return <div>
      {/* Get data from */}
      <br></br>
      <div className="CONTACT-US" style={{ marginTop: "50px" }}> CONTACT US </div> <br></br>
      
      <form onSubmit = {this.handleSubmit} id = "formID">
      <div className="CONTACT-US">Name </div>
      <br></br>

      <input type='text' placeholder="First and Last" name="name"  onChange={this.handleChange} />

      <div className="CONTACT-US"> E-mail </div><br></br>
      <input type='text' placeholder="Email" name="email"   size="80" onChange={this.handleChange} /> 


      <div className="CONTACT-US"> Comment</div><br></br>
      <input type='text' placeholder="Comment" name="comment"  size="80" style={{ height: "300" }}  onChange={this.handleChange} />
     

       <input type="submit" value ="submit"/>
      </form>



    </div>
  }

  seconeLine = () => {




    return <div>
      {/* Get data from */}
      <br></br>
      <div className="CONTACT-US" style={{ marginTop: "90px" }}>Get in Touch</div> <br></br>


      <div className="CONTACT-US"> Address </div><br></br>
      <div className="info" > School of Communication and Journalism
      Auburn University
        <br></br>
        <br></br>

        237 Tichenor Hall
        Auburn AL 36849-5206</div>

      <div className="CONTACT-US"> Join the team</div><br></br>
      <p> Dr. Myoung-Gi Chon <br></br>
      Tel: 334-844-2721 <br></br>
      mzc0113@auburn.edu
      </p>




    </div>
  }



  render() {

    return (

      <div>
        {this.emailConfirmation()}
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

      </div>
    );

  }


}