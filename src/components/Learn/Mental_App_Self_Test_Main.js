import React from 'react';
import SelfPic from '../../asset/image/selftest.png';
import { Link } from 'react-router-dom';
import '../../asset/css/style.css';
import Cookies, { get } from "js-cookie"


// @flow strict



class Mental_App_Self_Test_Main extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      Male : false,
      Female : false,
      Age : 0,
      Id : ""
    }

  }

  onCheck = (input) => {

    if (input == 0) {

      this.setState ({
        Male : true,
        Female :  false

      })
    }

    else {

      this.setState ({
        Male : false,
        Female :  true

      })

    }


  }



  onChangeInputBox = (e) => {

    this.setState({
      
      [e.target.name] : e.target.value
    })

    console.log(this.state.Id)
  }

  takeTestButton = () => {

    var userName = this.state.Id
    var age = this.state.Age
    
    
    
  }
  

  
  render() {
    return (
      <div>

<center>
      <div className='container_for_Mental_Main'>
        <h3 style = {{fontFamily: 'sans-serif' , fontWeight: "bold", letterSpacing : '10', fontSize : '300%', letterSpacing : '5px'}}>Self-Test</h3>
        
        <h5 style = {{marginTop : '25'}}>
          This is a questionaire test for diagnosing, monitoring, and measuring
          the severity of depression.
          
        </h5>


        <img
          src={SelfPic}
          alt='SelfPic'
          style={{
            width: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop : '30px'
          }}
        />

      <h5 style = {{marginTop : '30px'}}>Please enter basic personal information for more reliable inspection results and data investigation.</h5>
        
      <form>
        
      <label style = {{display : 'block'}}> Auburn ID </label>
      <input type = "text" placeholder = "Auburn ID " name="Id" onChange = {this.onChangeInputBox}/>

      <label style = {{display : 'block' , marginTop : '15px'}}>
      Gender : Male 
      <input type  = "checkbox" checked = {this.state.Male} onChange = {() => this.onCheck(0)} />
      female 
      <input type  = "checkbox"  checked = {this.state.Female}  onChange = {()=>this.onCheck(1)}/>
      </label>

      <label style = {{display : 'block'}}> Age </label>
      <input type = "number" placeholder ="Your age" name ="Age" onChange = {this.onChangeInputBox}/>

      
      </form>
        <div>
          <Link to='/selfTest'>
            <button onClick = {this.takeTestButton}className='btn-mental-main'>
                Take Test
            </button>
          </Link>
        </div>
      </div>
    </center>
        
      </div>
    );
  }
}

export default Mental_App_Self_Test_Main;



