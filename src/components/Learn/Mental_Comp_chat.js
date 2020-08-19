import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class Mental_Comp_info extends Component {

  
    constructor(props) {


        super(props);
        this.state = {

        display : "true",
        level : 0,
        emotionList : ["happiness","Sad", "Bored", "Anxious", "Confident", "Loving"],
        textInfo : null
            
        }
    }

    Menu_button_Clicked = () => {

    console.log("Menu button clicked")
    }

    Button_Clicked = () => {

      this.setState({

        level : this.state.level + 1
      })
      console.log("Button Clicked")
    }
    

    handleSubmit = (event) => {

      event.preventDefault()
      
      console.log("Your message is", this.state.textInfo)
      this.setState({
        level : this.state.level + 1

      })

    }

    handleInputChange = (event) => {
      event.preventDefault();
      console.log(event)
      console.log(event.target.name)
      console.log(event.target.value)

      this.setState({
        textInfo : event.target.value
      })
    }

    displayChat = () => {


    switch (this.state.level) {

        case 0 :
        
            return <div style ={{marginTop :"50"}}> 
                Hello how are you doing?<br/>
                Choose one of the emotion word below!<br/>

                {this.state.emotionList.map(c => {
              return (
                <button onClick = {()=> this.Button_Clicked()}
                
                >
                  {c}
                  <br></br>
                </button>
              );
            })}
              </div>

                    
        break;

        case 1 :
            return <div style = {{marginTop:"100"}}>
            
            Tell us in detail what happened and what 
            happened in that situation.
            
            <form onSubmit = {this.handleSubmit}>
            <p><input type = 'text' placeholder = "type" name = {this.state.textInfo} onChange = {this.handleInputChange}/> </p>
            <p><button>Send message</button></p>
            </form> 
            </div>
          
          


        break;
        case 2 :

         return <div style = {{margin: "100"}}>

             Since you choose your emotion somthing, I can feel your emotion from your story
             <div>It is first step to know what emotions I feel in mind management</div>
            
            <div>If you want to more information, please Contact us</div>
            <Link to='/contact'>Contact us</Link>

         </div>


        break
        case 3 :

       

        case 4 :
        break


    }


    
        
    }
    

    render() {

        return (


            <div>
                {/* Get data from */}
             
                <h4>Welcome to Chat</h4>
               

              {this.displayChat() }

                
              <button onClick={() => this.Menu_button_Clicked()}>
                To the menu
              </button>
          </div>


        );

    }

    
}