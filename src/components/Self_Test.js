import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../asset/detail/test.css';
import fireabse from '../firebase';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

export default class Self_test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInfo: null,
      progress: 0,
      dataSaved: [0, 0, 0, 0, 0, 0],
      isReady: false,
      name: '',
      warningLevel: 0,
      totalScore: 0,
      buttonColors: null,
      savedValue : []
    };
  }

  // Display Progress bar
  displayProgressbar = () => {
    var i = 0;
    var value = 0;
    var total = 0;
    while (i < 6) {
      total = this.state.dataSaved[i] + total;
      if (this.state.dataSaved[i] !== 0) {
        value = value + 16;
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

  //Submit with value
  handle_submit = (e) => {
    //Converting data
    var target = e.toString();
    var nameData = this.state.name;

    // Once submitted
    if (this.state.isReady == true) {
      let messageREf = fireabse
        .database()
        .ref(nameData)
        .orderByPriority()
        .limitToLast(100);
      fireabse.database().ref(nameData).push(target);

      // Data resets parts
      this.setState({
        name: '',
        dataSaved: [0, 0, 0, 0, 0, 0],
        isReady: 'false',
        warningLevel: 2,
      });
    } else {
      this.setState({
        warningLevel: 1,
      });
    }
  };

  caculateId = (array, number, stay) => {
    var eachID = '';
    eachID = array + number;


    return eachID;
  };

  // item is submitted Sucessfully
  item_submitted = () => {
    var array = this.state.dataSaved;
    var newarray = [];
    var i = 0;
    var total = 0;

    while (i < 6) {
      var missedNumber = 0;

      total = total + array[i];
      if (array[i] === 0) {
        missedNumber = i + 1;
        newarray.push(missedNumber);
      }

      i = i + 1;
    }

    switch (this.state.warningLevel) {
      case 1:
        return (
          <div>
            <b>You missed question {newarray}</b>
          </div>
        );
        break;

      case 2:
        return (
          <div>
            <b>Successfully Submit</b>
          </div>
        );

      default:
        return <div></div>;
    }
  };

  button_Clicked = (Question_Number, answer) => {
    // Question_Number / score
    this.state.dataSaved[Question_Number] = answer;

    var scoreStr = answer.toString();
    var arrayStr = Question_Number.toString();
    var correctId = arrayStr + scoreStr;

    this.setState({
      someCondition: correctId,
    });

    
    this.saveValue(arrayStr, scoreStr);
    
    this.displayProgressbar();
  };


  isAnswerExists = (question, answer) => {

    var arrayStr = question.toString();
    var scoreStr = answer.toString();

    var value = arrayStr + scoreStr;

    var array_lists = this.state.savedValue

    if (array_lists.includes(value)){

      return true
    }

    return false
    
  }
  

  saveValue = (Question_Number, answer) => {
    
    var arrayStr = Question_Number.toString();
    var scoreStr = answer.toString();


    var valueCode = arrayStr + scoreStr

    // Check already selected or not
    
    var copied_array = this.state.savedValue

    var length = this.state.savedValue.length + 1

    // Read data from first to lasts

    if (copied_array.length > 0) {

    // State saved value 계속 바뀝니다
    for (var i = 0; i < this.state.savedValue.length; i++) {
      
      var data = this.state.savedValue[i];
      var first_letter =  data.charAt(0);
      console.log(first_letter)
      
      // 만약에 같은 문제의 데이터가 존재한다면
      if (first_letter == arrayStr) {

    
      // Replace
      this.state.savedValue[i] = (valueCode);

      }
      

      else {
        this.state.savedValue.push(valueCode);


      }
    }
  }

  else {
    this.state.savedValue.push(valueCode);  
  }
  // console.log("Copied array", this.state.copied_array)
  // console.log("Saved data from saved", this.state.savedValue)
    
  }


  
  
  // Display quesiton parts
  displayQuestion = (quesitons_text, Question_Number) => {
    return (
      <div>
        <div className='program-type-questions-point'>
          <h4>{quesitons_text}</h4>
          <table className='program-psychological-answer-table'>
            <tbody>
              <tr>
                <div>
                  {/* If Button is clicked */}
                  <td style = {{border : 0}}></td>
                  <td style = {{border : 0}}></td>
                  <td style = {{border : 0}}></td>

                  <td
                    onClick={() => this.button_Clicked(Question_Number, 1)}
                    style={
                      this.isAnswerExists(Question_Number,1) ? { backgroundColor: 'blue' }: {} }
                  >
                    1
                  </td>
                  <td
                    onClick={() => this.button_Clicked(Question_Number, 2)}
                    style={
                      this.isAnswerExists(Question_Number,2)
                        ? { backgroundColor: 'blue' }
                        : {}
                    }
                  >
                    2
                  </td>
                  <td
                    onClick={() => this.button_Clicked(Question_Number, 3)}
                    style={
                      this.isAnswerExists(Question_Number,3)
                        ? { backgroundColor: 'blue' }
                        : {}
                    }
                  >
                    3
                  </td>
                  <td
                    onClick={() => this.button_Clicked(Question_Number, 4)}
                    style={
                      this.isAnswerExists(Question_Number,4)
                        ? { backgroundColor: 'blue' }
                        : {}
                    }
                  >
                    4
                  </td>
                  <td
                    onClick={() => this.button_Clicked(Question_Number, 5)}
                    style={
                      this.isAnswerExists(Question_Number,5)
                        ? { backgroundColor: 'blue' }
                        : {}
                    }
                  >
                    5
                  </td>

                  <td style = {{border : 0}}></td>
                  <td style = {{border : 0}}></td>
                  <td style = {{border : 0}}></td>
                </div>
              </tr>
              
            </tbody>
          </table>
          <div className='question-point-guide'>
            <span className='low'>Stable </span>
            <span className='high'>Unstable</span>
          </div>

          {/* Space between lines */}
          <hr></hr>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  };



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
          {this.displayQuestion(
            'Q1. How much is the depression in my daily life',
            0
          )}

            {this.displayQuestion('Q2. How much anxiety is in my daily life?', 1)}
            {this.displayQuestion( "Q3. How much is the psychological trauma in my daily life?", 2)}
            {this.displayQuestion( "Q4. How negative is my mindset?",3)}
            {this.displayQuestion( "Q5. How far is my self-esteem?",4)}
            {this.displayQuestion( "Q6. If there are any problems with my interpersonal relationships, how much?",5)}

          <br></br>
          <input
            type='text'
            placeholder='Nick Name'
            name='email'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button onClick={() => this.handle_submit(this.state.dataSaved)}>
            submit
          </button>

          {this.item_submitted()}
        </center>
      </div>
    );
  }
}
