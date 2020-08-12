import React from 'react';
import axios from 'axios';
import  hangul from 'hangul-js';
import Cookies from "js-cookie"
import bgImg from '../../assets/img/background/QuizBack.png'




export default class TrueFalseQquiz extends React.Component {
   
    constructor(props) {
        super(props)

        this.state = {
        data: {},
        image: undefined,
        sound : undefined,
        letter : undefined,
        // Initial mapping
        mapping : '/api/letter/' + Cookies.get("CourseData"),
        wordData: {},
        //Intical word mapping
        wordmapping : '/api/word/Cns01',
        word_image : undefined,
        word_text : undefined,     
        word_sound : undefined,
        word_letter : undefined,

        RightAnswer : undefined,
        Explanation :  false,
        result : false
        
        }
    }


    //When reset Button is cliced
   randomGeneartor =() => {
      
    var mappingAddress = ["Cns01", "Cns02", "Cns03","Cns04","Cns05"]
        var randomMappingCode = mappingAddress[Math.floor(Math.random()*mappingAddress.length)]
        var randomMappingAddress = "/api/letter/" + randomMappingCode

         this.setState({
             mapping: randomMappingAddress,
            Explanation : false,
            result : false       
         })                  
         console.log("RandomGenerator : call random letter mapping :" , this.state.mapping)
     
        this.loadData();     
     
    }
                     
    //Get letter mapping for image,letter, sound
    //Get word mapping for letter_code, picture, sound

    async loadData() {               
        // Call this state mapping
        console.warn("mapping address", this.state.mapping)
        const data = await axios.get(this.state.mapping).then(res => res.data);
    
        this.setState({ data: data });
        //Set pat for image, letter, sound
        this.setState({  
                        letter : this.state.data.letter,
                        sound: require("../../assets/letter/sound/" + this.state.data.sound) 
                         })
         
        //Call random word data from  (Cns01)
        const wordData = await axios.get(this.state.wordmapping).then(res => res.data);
        this.setState({wordData : wordData});
        //Set image,sound, text path        
        this.setState({ word_image: require("../../assets/word/img/" + this.state.wordData.image),
                        word_text : this.state.wordData.word,
                        word_sound: require("../../assets/word/sound/" + this.state.wordData.sound),
                        word_letter : this.state.wordData.wordLetter
        });

        
        var answer = this.hanguldissembled(this.state.letter, this.state.word_text)
        
         if (answer == true) {
             this.setState({RightAnswer: "true"})}
         else ( 
            this.setState({RightAnswer: "false"})  
                )

        console.log("Right answer form",this.state.RightAnswer)
        console.log ("Word Text", this.state.word_text);
        console.log("Word letter", this.state.letter)
        
    }

    hanguldissembled = (letter, wordText) => {

        var disassembledArray = hangul.disassemble(wordText);
        var answer = disassembledArray.includes(letter)
       
        console.log("Answer hangulDissembled ", answer)
        return answer;
    }


    //Load Web-Page
     async componentDidMount () {
          this.loadData();
     }

    
    AnswerButtonPressed = (e) => {       
        console.log("passed value" , e)
        var StringRightanswer = this.state.RightAnswer
        console.log("Right answer", StringRightanswer )
        
        if(e === StringRightanswer) {
            console.log("Your answer is Right")
            alert("Answer is correct")
            this.setState({result : "Correct"})
          
        }
        
        else {
        console.log("Your Answer is Wrong")       
        alert("Answer is Wrong")
        this.setState({result : "False"})
        }

        this.setState({
            Explanation : true
            
        })
      
    }


    
 
     //When button is clicked        
    playSound = () => {
        var audio = new Audio(this.state.word_sound)
        audio.play();
        console.warn("button clickeded")             
        }  

 
  
   
    render() {

    
    

        return (
            
            
            
            <div>



                
                <center> 
                {/* Visible Explanation    */}
                {this.state.Explanation?
                <div className = "centerCSS" > 
                <div className ="QuizExplanation" style ={{color : "red"}}>
                {this.state.result} <br></br>
                        <div className ="QuizExplanation" style ={{color : "black"}}>
                    Explanation: the word <div style = {{color :"#29abe2" , display :"inline"}} 		>{this.state.word_text} </div>has the
                    <div style = {{color :"#29abe2" , display :"inline"}} > {this.state.word_letter} </div> sound.
                    </div>
                </div>
                </div>
                :null
                }
            

                <br></br>
                <br></br>

                <button onClick = {this.randomGeneartor}>Next problem</button>
                <br></br>
                <div className = "Quiz"> 
                Can you hear <div className = "QuizEmpasize">{this.state.data.letter}</div>   sound in this word?  
             </div>

                <div className ="centerCSS" >
                <button> <img src={this.state.word_image} width ="200" height = "100" onClick = {this.playSound} alt = "click button" /> 
                </button>
                </div>

                <div className = "row" style={{backgroundImage: `url(${bgImg})` , marginTop : "35px" , marginBottom : "20px"}}>
                    <button onClick = {() => this.AnswerButtonPressed("true")} className = "FreeButton">Yes
                </button>
             

                <button onClick = {() => this.AnswerButtonPressed("false")} className = "FreeButton"  >No</button>
                </div>
                
               
            
           


        
            </center> 

            </div>

              
               
                
        );
    }
}


 