import React, { Component } from "react";

export default class Mental_Comp_info extends Component {


    constructor(props) {


        super(props);
        this.state = {

        display : "true",
        level : 0
            
        }
    }

    Menu_button_Clicked = () => {

    console.log("Menu button clicked")
    }

    displayChat = () => {


    switch (this.state.level) {

        case 0 :
        
            return <div>
                Hello how are you doing?<br/>
                Choose one of the emotion word below!
            </div>
        break;

        case 1 :
            return <div>
            
            Tell us in detail what happened and what 
            happened in that situation

            </div>


        break;
        case 2 :

         return <div>

             Since you chhose your emotion somthing, I can feel your emothion from your story
             <div>It is first step to know what emotions I feel in mind management</div>
         </div>


        break
        case 3 :

        return <div>
            Move Move
        </div>
        break

        case 4 :
        break


    }


    
        
    }
    

    render() {

        return (


            <div className='background_For_phone'>
            <div>
              <div
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex'
                }}
              >
                {/* Get data from */}
             
                    <h4>Welcome to Chat</h4>
               
              </div>

                
              <button onClick={() => this.Menu_button_Clicked()}>
                To the menu
              </button>
            </div>
          </div>


        );

    }

    
}