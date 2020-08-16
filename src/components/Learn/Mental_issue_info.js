
import React, { Component } from "react";
import mentalData from "../data.json"
import '../../asset/css/style.css';
import { Row } from "react-bootstrap";





export default class Mental_issue_info extends Component {
 
constructor (props){

    super(props)
    this.state = {

        Mouseclicked : "false",
        Mental_Id : 0,
        Mental_Info : null
    }

}


//When id button is choosen
button_Clicked = (id, info) => {

    var MentalID = id;
    var MentalInfo = info
   
console.log("Button id", id)
  
    this.setState({
        Mouseclicked : "true",
        Menta_Id : MentalID,
        Mental_Info : MentalInfo

   })


        console.log("Is button clicked ???", this.state.Mouseclicked)
    

    
}

    Menu_button_Clicked = () => {

    this.setState({Mouseclicked : "false"
   
    })

    console.log("to the Menu")
    }


    displayMenu = () => {

        if (this.state.Mouseclicked == "false")
    return <div>
        <center>
        
        {mentalData.map(c=> {
            return <button onClick = {()=>this.button_Clicked(c.id, c.info)} className = "Mental_App_button" style ={{width : 500}}
                    > {c.Name}</button>                   
                    

        })
        }
    </center>
    </div>


    else 
        return <div>
            {this.state.Mental_Info}
        </div>
      
    }
    
    
  render()  {
  

    return <div className ='background_For_phone'>
        
        <div>

        <div style = {{alignItems: 'center',
          justifyContent: 'center',
          display: 'flex'}}>
        {/* Get data from */}
        <table>
        <thead>
            
            <th>Learn about Mental Illness</th>
          </thead>
   
   
 

    </table>

    {this.displayMenu()}



    </div>


    <button onClick = {()=>this.Menu_button_Clicked()} >To the menu</button>

    </div>
</div>

}
}

