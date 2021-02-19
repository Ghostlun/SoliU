import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../asset/detail/test.css';
import fireabse from '../firebase';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';
import questionJson from "../question.json";
import Cookies, { get } from "js-cookie"
import Result from '../Pages/Result'

// data = datasaved [userinput]
export default class Self_test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInfo: null,
      progress: 0,
      dataSaved: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      isReady: false,
      name: '',
      totalScore: 0,
      buttonColors: null,
      savedValue : [],
      submitted : 'false'
    };
  }

  // Display Progress
  // Progress diplay
  displayProgressbar = () => {
    var i = 0;
    var value = 7;
    var total = 0;
 
    while (i < 15) {
      // total = this.state.dataSaved[i] + total;
      
      if (this.state.dataSaved[i] !== 0) {
        value = value + 7;
      }

      if (value >= 90) {
        value = 100;
        this.setState({
          isReady: true,
          totalScore: total,
        });
      }
      i = i + 1;
    }

    this.setState({
      progress: value,
    });
  };

  handleChange = (e) => {

    this.setState({ name: e.target.value });
    
  };

  //submit button works
  handle_submit = (dataSaved) => {
    
    //Converting data
    var data = dataSaved.toString();
    var nameData = this.state.name;
    var dataReady = 1

    var d = new Date()
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear()
    
    var time = month + "/" + date + "/" + year



    if (nameData.includes("#,&,@") || nameData == ""){
      dataReady = 0;
      alert("Your names contains #,&,@")
    }

    // Data send to firebase
    if (dataReady== 1) {
      let messageREf = fireabse
        .database()
        .ref(nameData)
        .orderByPriority()
        .limitToLast(100);

      fireabse.database().ref(nameData).push({send_data : data, send_time : time });
    }

    // Name : setName, value
    Cookies.set("user", nameData);
    Cookies.set("result", this.state.dataSaved)



    // Data Resets
      this.setState({
        dataSaved: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        isReady: 'false',
        submitted : 'true'
    });

  };



  // item is submitted Sucessfully
  item_submitted = () => {
    var array = this.state.dataSaved;
    var missedNumberList = ""
    var WarningLevel = 0;    
  
    // when datasets has missed number, show us.
    for (var i = 0; i< array.length; i++) {
    if (array[i] === 0) {
        var value = i + 1;
        missedNumberList += value + ",";
        WarningLevel = 0;
      }
      else {
        WarningLevel = 1
      }
    }

    if (this.state.submitted == 'true') {

      WarningLevel = 2
    }

    // Warning level = 0 , there is some missed value
    switch (WarningLevel) {
      case 0:
        return (
          <div>
            <b>You missed some question {missedNumberList}</b>
          </div>
        );
        break;
        
        case 1:
          return (
            <div>
              <b>Please type your type your Auburn Id in the chat box, and click the submit button</b>
            </div>

          )
        case 2:
          return (

            <div>
            <b>your result is submitted</b>
            
              <div>
             <Link to = "/result">
              <button>Show the results</button>
            </Link> 
            </div>

            </div>

          );
          break;

      default:
        return <div></div>;
    }



  };


  button_Clicked = (Question_Number, answer) => {
    // Question_Number / score
    var location = Question_Number - 1
    this.state.dataSaved[location] = answer;

    var scoreStr = answer.toString();
    var arrayStr = Question_Number.toString();
    var correctId = arrayStr + scoreStr;
    
    this.setState({
      someCondition: correctId,
    });
    
    this.saveValue(arrayStr, scoreStr);
    this.displayProgressbar();

    
  };


  // check answer is on the lists or nots;
  isAnswerExists = (question, answer) => {

    var arrayStr = question;
    var scoreStr = answer.toString();
    var value = arrayStr + scoreStr;
    var array_lists = this.state.savedValue


    if (array_lists.includes(value)){
        return true
    }
      return false
    
  }
  
  // Save value into 
  saveValue = (InputQuestion, InputAnswer) => {
    
    var arrayStr = InputQuestion.toString();
    var scoreStr = InputAnswer.toString();
    var valueCode = arrayStr + scoreStr
    // Array copied
    var copied_array = this.state.savedValue

    var QuestionInArray, AnswerInArray, ValueCodeInArray
  


    if (copied_array != 0) {
      copied_array.push(valueCode)

      for (var i = 0; i < copied_array.length; i++) {

        ValueCodeInArray = copied_array[i] 
        if (ValueCodeInArray.length == 2) {

          QuestionInArray = ValueCodeInArray[0]
          AnswerInArray = ValueCodeInArray[1]
        }

        else if (ValueCodeInArray.length ==3) {

          QuestionInArray = ValueCodeInArray[0,1]
          AnswerInArray = ValueCodeInArray[2]
        }



        // 숫자가 존재할때

       if (QuestionInArray == InputQuestion) {

            copied_array[i] = valueCode
        }
        

      }

    }
    
    else {

      copied_array.push(valueCode)
    }
    

  
   
    
  
  //EndLine, and confirmed it
    this.setState({

    savedValue : copied_array

  })
}
   
 // Display quesiton parts
  displayQuestion = () => {
    
    return (
      
      <div>
      {questionJson.map((data,id) => {
        return (

          <div className='program-type-questions-point'>
          <div key={id}> 
            <h4>{data.id} . {data.question}</h4>

            <table className='program-psychological-answer-table'>
             <tbody>             <tr>
                {/* If Button is clicked */}
                  <td style = {{border : 0 , backgroundColor :"white"}}></td>
                  <td style = {{border : 0, backgroundColor :"white"}}></td>
                  <td style = {{border : 0, backgroundColor :"white"}}></td>

                  <td
                     onClick={() => this.button_Clicked(data.id, 1)}
                     style={
                       this.isAnswerExists(data.id,1) ? { backgroundColor: '#c4def6' }: {} }
                   >
                   1
                   </td>
                <td
                    onClick={() => this.button_Clicked(data.id, 2)}
                     style={
                       this.isAnswerExists(data.id,2)
                         ? { backgroundColor: '#c4def6' }
                                           : {}
                     }
                   >
                     2
                   </td>
                   <td
                     onClick={() => this.button_Clicked(data.id, 3)}
                     style={
                       this.isAnswerExists(data.id,3)
                         ? { backgroundColor: '#c4def6' }
                         : {}
                     }
                   >
                   3
                   </td>
                   <td
                     onClick={() => this.button_Clicked(data.id, 4)}
                     style={
                       this.isAnswerExists(data.id,4)
                         ? { backgroundColor: '#c4def6' }
                         : {}
                   }
                   >
                     4
                   </td>
                   <td
                     onClick={() => this.button_Clicked(data.id, 5)}
                     style={
                       this.isAnswerExists(data.id,5)
                         ? { backgroundColor: '#c4def6' }
                         : {}
                     }
                   >
                     5
                 </td>

                   <td style = {{border : 0, backgroundColor :"white"}}></td>
                   <td style = {{border : 0, backgroundColor :"white"}}></td>
                   <td style = {{border : 0,backgroundColor :"white"}}></td>
               </tr>
              
             </tbody>
         </table>
           <div className='question-point-guide'>
             <span className='low'>Did not apply to me at all  </span>
             <span className='high'>Applied to me very much</span>
          </div>

           {/* Space between lines */}
           <hr></hr>
           <br></br>
           <br></br>
          </div>
            </div>
          



          
          
       
          
        );
      })}
    </div>
    )
  }


  render() {

    return (
      <div>
        <center>
          <div className='bg page-program-type-questions'>
            <div className  ='bg-top'>
              <h1>MentalHealth-Test</h1>
              <h2>STEP. Evaluate my mental-health</h2>
              <h3>
                How was your state of mind during the week? Please rate my
                mental state.
              </h3>
            </div>
          </div>

          <div className='page' id='program-type-questions'>
            <div style={{ position: 'sticky', color: 'red' }}>
              <ProgressBar
                animated
                now={this.state.progress}
                label={`${this.state.progress}%`}
                style={{ marginTop: 50, marginBottom: 50, height: 15 }}
              />
            </div>
          </div>
          {this.displayQuestion()}
         
          <br></br>
          <input
            type='text'
            placeholder='Nick Name'
            name='email'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button onClick={() => this.handle_submit(this.state.dataSaved)}>
            Submit
          </button>

          {this.item_submitted()}
        </center>
      </div>
    );
  }
}
