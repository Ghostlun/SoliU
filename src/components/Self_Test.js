import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
import "../asset/detail/test.css"
import fireabse from "../firebase"
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";


export default class Self_test extends Component {

  
    constructor(props) {


        super(props);
        this.state = {

        textInfo : null,
        numbers : [1,2,3,4,5,6,7,8,9,10],
        progress : 0,
        dataSaved : [0,0,0,0,0,0],
        isReady  : false,
        name : '',
        warningLevel : 0,
        totalScore : 0,
        buttonColors : null,
        someCondition : false
        
        }
    }
 
    
    // item is submitted Sucessfully
    item_submitted = () => {

        var array = this.state.dataSaved
        var newarray = []
        var i = 0
        var total = 0
        
        while (i < 6) {
        var missedNumber = 0
        
        total = total + array[i]
        if (array[i] == 0) {

            missedNumber = i + 1
            newarray.push(missedNumber)
        }
            
        i = i + 1
        }   

        
    


        switch(this.state.warningLevel) {
            
            case 1: return (
                <div>
                    <b>You missed question {newarray}</b>
                </div>

            )
            break;

            case 2: return (
                <div>
                    <b>Successfully Submit</b>
                </div>
            )


            default : return(
                <div>
                </div>
            )
            

        }

        
    }

    button_Clicked= (Question_Number, answer) => {
        // Question_Number / score
        this.state.selected = 1;
        this.state.dataSaved[Question_Number] = answer
        
        var scoreStr = answer.toString();
        var arrayStr =  Question_Number.toString();
        var correctId = arrayStr+ scoreStr;

        this.setState({

            someCondition : correctId
        })
        console.log(correctId)
        this.displayProgressbar()
     
    }


    // Display Progress bar
displayProgressbar = () => {
       var i = 0
       var value = 0
       var total = 0
    while (i < 6){
        
        total = this.state.dataSaved[i] + total
        if  (this.state.dataSaved[i] != 0) {

            value = value + 16
        
        } 

        if (value >= 90) {

            value = 100
            this.setState({
                isReady : true,
                totalScore : total
                
            })
            
            
        } 
    i = i +1
}
        
this.setState({
    progress : value
})
    }


    handleChange = (e) => {

        this.setState({name: e.target.value});
      }

      
      

    //Submit with value
handle_submit = (e) => {

    //Converting data
    var target = e.toString()   
    var nameData = this.state.name

    // Once submitted
    if (this.state.isReady == true) {
        let messageREf = fireabse.database().ref(nameData).orderByPriority().limitToLast(100)
         fireabse.database().ref(nameData).push(target);
        
        
        // Data resets parts
        this.setState({
           
            name : '',
            dataSaved : [0,0,0,0,0,0],
            isReady : 'false',
            warningLevel : 2
            
    
        })
    }

    else {
        this.setState({
            warningLevel: 1

        })
    }
    

    }

    
    caculateId = (array, number, stay) => {

        var eachID = ""
        eachID = array + number
        
        console.log (eachID);

        
        return eachID
        

    }
    
    // Display quesiton parts
    displayQuestion = (quesitons_text, Question_Number) => {


        return (

            <div>


            <div className="program-type-questions-point">
            <h4>{quesitons_text}</h4>
            <table className="program-psychological-answer-table">
                <tbody>
                    <tr>
                 <div>
                {/* If Button is clicked */}
            <td  onClick = {()=> this.button_Clicked(Question_Number,1)}  style={ this.state.someCondition === this.caculateId(Question_Number,"1") ? { backgroundColor : "blue"} : {}}>1</td>
            <td  onClick = {()=> this.button_Clicked(Question_Number,2)}  style={ this.state.someCondition === this.caculateId(Question_Number,"2") ? { backgroundColor : "blue"} : {}}>2</td>
            <td  onClick = {()=> this.button_Clicked(Question_Number,3)}  style={ this.state.someCondition === this.caculateId(Question_Number,"3") ? { backgroundColor : "blue"} : {}}>3</td>
         
            </div>
            </tr>
            </tbody>
            </table>
            <div class="question-point-guide">
                <span class="low">Stable </span>
                <span class="high">Unstable</span>
            </div>

            {/* Space between lines */}
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
        <center>
        <div class="bg page-program-type-questions">
        <div class="bg-top">
            <h1>Self-Test</h1>
            <h2>STEP. Evaluate my mental-health</h2>
            <h3>How was your state of mind during the week? Please rate my mental state.</h3>
        </div>
        </div>
            
    <div class="page" id="program-type-questions">
     

<div style = {{position : "sticky" , color : "red"}}> 
    <ProgressBar animated now={this.state.progress}  label={`${this.state.progress}%`} style = {{ marginTop : 50, marginBottom : 50, height : 15}}/>
        </div>
      

        </div>
            {this.displayQuestion( "Q1. How much is the depression in my daily life", 0)}








            
            {this.displayQuestion( "Q2. How much anxiety is in my daily life?" , 1)}
       
       
       
       
       
       
            {/* {this.displayQuestion( "Q3. How much is the psychological trauma in my daily life?", 2)}
            {this.displayQuestion( "Q4. How negative is my mindset?",3)}
            {this.displayQuestion( "Q5. How far is my self-esteem?",4)}
            {this.displayQuestion( "Q6. If there are any problems with my interpersonal relationships, how much?",5)} */}
    

           
            <br></br>
            <input type='text' placeholder="Nick Name" name="email" value = {this.state.name} onChange={this.handleChange} />
            <button onClick = {()=> this.handle_submit(this.state.dataSaved)}>submit</button>

            {this.item_submitted()}
            </center>
       </div>
       
       
       );

    }

    
}