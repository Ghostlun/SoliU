import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../asset/detail/test.css"


export default class Self_test extends Component {

  
    constructor(props) {


        super(props);
        this.state = {

        display : "true",
        level : 0,
        textInfo : null,
        numbers : [1,2,3,4,5,6,7,8,9,10],
        progress : 0,
        dataSaved : [0,0,0,0,0,0],
        selected : -1
        
            
        }
    }
    

    button_Clicked= (score, array) => {
        
        this.state.selected = 1;
        this.state.dataSaved[array] = score
        this.displayProgressbar()
        console.log(this.state.selected)
        
        console.log("Score is", score, "Where array is ", array);
    }

    displayProgressbar = () => {
       var i = 0
       var value = 0
    while (i < 10){
    
        if  (this.state.dataSaved[i] != 0) {

            value = value + 16
        
        } 

        if (value >= 100) {

            value = 100
        } 
    i = i +1
}
        
this.setState({
    progress : value
})
    }

    

    
    
    displayQuestion = (quesitons, array) => {

        return (

            <div>


            <div class="program-type-questions-point">
            <h4>{quesitons}</h4>
            <table class="pre-program-psychological-answer-table depression">
                <tbody>
                    <tr>
                 <div>
                   
            {this.state.numbers.map(numberslist => {
              return (
                    <td  onClick={() => this.button_Clicked(numberslist, array)}>{numberslist}</td>  

              );
            })}
        </div>
            </tr>
            </tbody>
            </table>
            <div class="question-point-guide">
                <span class="low">Stable </span>
                <span class="high">Unstable</span>
            </div>

            <hr></hr>
            <br></br>
            
            <br></br>

                
     </div>



                
            </div>


        )

    }
    
    

    render() {

        return (
    <div>
    <div class="bg page-program-type-questions">
        <div class="bg-top">
            <h1>Self-Test</h1>
            <h2>STEP1. Evaluate my mental-health</h2>
            <h3>How was your state of mind during the week? Please rate my mental state.</h3>
        </div>
    </div>
            
    <div class="page" id="program-type-questions">
        <div class="program-progress-bar">
        <span class="program-progress-bar-percent">{this.state.progress}%</span>
            <div class="program-progress-bar-full">
                <div class="program-progress-bar-fill" style = {{width: '100px'}}> </div>
            </div>
        </div>
        </div>
            {this.displayQuestion( "Q. How much is the depression in my daily life", 0)}
            {this.displayQuestion( "Q. How much anxiety is in my daily life?" , 1)}
            {this.displayQuestion( "Q. How much is the psychological trauma in my daily life?", 2)}
            {this.displayQuestion( "Q. How negative is my mindset?",3)}
            {this.displayQuestion( "Q. How far is my self-esteem?",4)}
            {this.displayQuestion( "Q. If there are any problems with my interpersonal relationships, how much?",5)}
        </div>
        );

    
    

    }

    
}