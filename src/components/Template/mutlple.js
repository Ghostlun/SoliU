import React from 'react';
import axios from 'axios';
import  hangul from 'hangul-js';
import Cookies from "js-cookie"
import bgImg from '../../assets/img/background/QuizBack.png'




export default class MutipleQuiz extends React.Component {
   
    constructor(props) {
        super(props)

        this.state = {

            letterName : Cookies.get("CourseData"),
            Correct_Mapping :"/api/word/Cns01",  
            W_data : null,
            C_data : null,
            choice1 : null,
            choice2 : null,
            choice3 : null,
            letter : null,
        
            right : null,
            Correct_or_Not: null,
            VisibleExplanation : false
        
        }



    }



    async loadData() {               
        // Call this state mapping

        var Wrong_Choices_Mapping_Address = "/api/words?exclude=" + this.state.letterName + "&num=3"
        var Correct_Choice_Mapping_Address = "/api/word/" + this.state.letterName

        console.log("this.state.Wrong_Mapping", this.state.Wrong_Mapping)
        console.log("Wrong_Choices_Mapping_Address", Wrong_Choices_Mapping_Address)

        const WrongAnswer = await axios.get(Wrong_Choices_Mapping_Address).then(res => res.data);
    

        const CorrectAnswer = await axios.get(Correct_Choice_Mapping_Address).then(res => res.data);

        this.setState({ 
            W_data: WrongAnswer,
            C_data : CorrectAnswer
        });
        
        var CopiedArray = this.state.data
        
        console.log("C_data:  ", this.state.C_data.wordLetter)
        console.log("Wrong Answer: ", WrongAnswer)

        

        //Load Choice from the word lists
        var  Wrong1 = WrongAnswer[0].word
        var  Wrong2= WrongAnswer[1].word
        var  Wrong3= WrongAnswer[2].word
        var  CorrectChoice = CorrectAnswer.word

        console.log("Wrong1: ", Wrong1)
     
        this.setState({
            right: CorrectChoice,
            letter : this.state.C_data.wordLetter

        })



        var array = [Wrong1, Wrong2, Wrong3, CorrectChoice]
        
        console.log("Original array,", array);

        // var newArray = this.shuffle(array)

        
        var newArray = array.sort(() => Math.random() - 0.5);

        console.log("Randomed array", newArray)


        console.log("This state Choice Array", this.state.ChoiceArray)

        this.setState({

            choice1 : newArray[0],
            choice2 : newArray[1],
            choice3 : newArray[2],
            choice4 : newArray[3]
        })

            
        
    }
    //Check Answer correct or not
    checkAnswerCorrect = (target) => {
        
        console.log(this.state.right)
        console.log(target)
        this.setState({VisibleExplanation: true})


        if(this.state.right == target) {

            this.setState({ Correct_or_Not : "Correct"})
            return alert("You are correct")
        }

        else {
            this.setState({ Correct_or_Not : "Incorrect"})

            return  alert("Answer is wrong")

        }


    }



    shuffle = (array) => {


        var newArray = array.sort(() => Math.random() - 0.5);
        
        return newArray

    }

    reload = () => {
        
        this.setState({VisibleExplanation:false})
        this.loadData();

    }
    

 async componentDidMount() {


        this.loadData();
    }
  
   
    render() {
           return (
            
            
            
            <div>
                <center> 

                {/* Visible Explanation    */}
                {this.state.VisibleExplanation?
                <div className = "centerCSS" > 
                <div className ="QuizExplanation" style ={{color : "red"}}>
                {this.state.Correct_or_Not} <br></br>
                    </div>
                </div>
                :null
                }

                    

                    

                    <div className = "Quiz">
            Please select letter {this.state.letter}  have sounds
            </div>
            <br></br>
            <button onClick = {this.reload}> Reload Data</button>

            <br></br><br></br><br></br>

                
            <div className = "CenterComponent" style={{backgroundImage: `url(${bgImg})`}}>
            <div className = "row">
            <button className = "FreeButton" onClick = {() => this.checkAnswerCorrect(this.state.choice1)}>{this.state.choice1}</button>

            <button className = "FreeButton"onClick = {() => this.checkAnswerCorrect(this.state.choice2)}>{this.state.choice2}</button>
            </div>
 

            <div className = "row">

                <button className = "FreeButton"onClick = {() => this.checkAnswerCorrect(this.state.choice3)}>{this.state.choice3}</button>
                <button className = "FreeButton"onClick = {() => this.checkAnswerCorrect(this.state.choice4)}>{this.state.choice4}</button>
           
                
            </div> 
            </div>
            </center>

                
            </div>
        
        
        
         








        )
    
    }

}


 