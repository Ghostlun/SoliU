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

    console.log (time)


    if (nameData.includes("#,&,@") || nameData == ""){
      dataReady = 0;
      alert("Your names contains #,&,@")
    }


    console.log("What is target", data)
    console.log("what is data", date)

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

    // console.log ("Window href", window.location.hostname)
    // var currentPage = window.location.hostname + "/result"
    // console.log("Current Page", currentPage)
    
    // window.location.assign(currentPage)

  };

  caculateId = (array, number, stay) => {
    var eachID = '';
    eachID = array + number;
    return eachID;
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

  move_page_to = () => {

    
  //   <Link to = "/result">
  //   <button>Show the results</button>
  // </Link>
  }

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
  saveValue = (Question_Number, answer) => {
    
    var arrayStr = Question_Number.toString();
    var scoreStr = answer.toString();
    var valueCode = arrayStr + scoreStr 
    var copied_array = this.state.savedValue
    // What value includes
    var data
    var first_letter
    var InputRequried = true;
    // 지금 로직은 savedValue는 버튼을 눌렀을때, 그거에대한 valuecode를 가지고 있는거야, valucode부분에 Question_number와 일치하는 부분 부분이 있으면, 
    // 그것을 바꿔준다, 그렇지 않다면 push를 해준다.
    this.state.savedValue.push(valueCode)

    if (copied_array.length > 0) {
    // State saved value 계속 바뀝니다
      for (var i = 0; i < this.state.savedValue.length; i++) {
      }
  }
  else {this.state.savedValue.push(valueCode)}
  //endline
  console.log("Copied_array", copied_array)
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
                  <td style = {{border : 0}}></td>
                  <td style = {{border : 0}}></td>
                  <td style = {{border : 0}}></td>

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

                   <td style = {{border : 0}}></td>
                   <td style = {{border : 0}}></td>
                   <td style = {{border : 0}}></td>
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

  
    


  
        // // {/* <div className='program-type-questions-point'>
        //   <h4>{quesitons_text}</h4>
        //   <table className='program-psychological-answer-table'>
        //     <tbody>
        //       <tr>
        //         <div>
        //           {/* If Button is clicked 
        //           <td style = {{border : 0}}></td>
        //           <td style = {{border : 0}}></td>
        //           <td style = {{border : 0}}></td>

        //           <td
        //             onClick={() => this.button_Clicked(Question_Number, 1)}
        //             style={
        //               this.isAnswerExists(Question_Number,1) ? { backgroundColor: 'blue' }: {} }
        //           >
        //             1
        //           </td>
        //           <td
        //             onClick={() => this.button_Clicked(Question_Number, 2)}
        //             style={
        //               this.isAnswerExists(Question_Number,2)
        //                 ? { backgroundColor: 'blue' }
        //                 : {}
        //             }
        //           >
        //             2
        //           </td>
        //           <td
        //             onClick={() => this.button_Clicked(Question_Number, 3)}
        //             style={
        //               this.isAnswerExists(Question_Number,3)
        //                 ? { backgroundColor: 'blue' }
        //                 : {}
        //             }
        //           >
        //             3
        //           </td>
        //           <td
        //             onClick={() => this.button_Clicked(Question_Number, 4)}
        //             style={
        //               this.isAnswerExists(Question_Number,4)
        //                 ? { backgroundColor: 'blue' }
        //                 : {}
        //             }
        //           >
        //             4
        //           </td>
        //           <td
        //             onClick={() => this.button_Clicked(Question_Number, 5)}
        //             style={
        //               this.isAnswerExists(Question_Number,5)
        //                 ? { backgroundColor: 'blue' }
        //                 : {}
        //             }
        //           >
        //             5
        //           </td>

        //           <td style = {{border : 0}}></td>
        //           <td style = {{border : 0}}></td>
        //           <td style = {{border : 0}}></td>
        //         </div>
        //       </tr>
              
        //     </tbody>
        //   </table>
        //   <div className='question-point-guide'>
        //     <span className='low'>Stable </span>
        //     <span className='high'>Unstable</span>
        //   </div>

        //   {/* Space between lines 
        //   <hr></hr>
        //   <br></br>
        //   <br></br>
        // </div> */}

    
    



  
  
  // // Display quesiton parts
  // displayQuestion = (quesitons_text, Question_Number) => {
  //   return (
  //     <div>
  //       <div className='program-type-questions-point'>
  //         <h4>{quesitons_text}</h4>
  //         <table className='program-psychological-answer-table'>
  //           <tbody>
  //             <tr>
  //               <div>
  //                 {/* If Button is clicked */}
  //                 <td style = {{border : 0}}></td>
  //                 <td style = {{border : 0}}></td>
  //                 <td style = {{border : 0}}></td>

  //                 <td
  //                   onClick={() => this.button_Clicked(Question_Number, 1)}
  //                   style={
  //                     this.isAnswerExists(Question_Number,1) ? { backgroundColor: 'blue' }: {} }
  //                 >
  //                   1
  //                 </td>
  //                 <td
  //                   onClick={() => this.button_Clicked(Question_Number, 2)}
  //                   style={
  //                     this.isAnswerExists(Question_Number,2)
  //                       ? { backgroundColor: 'blue' }
  //                       : {}
  //                   }
  //                 >
  //                   2
  //                 </td>
  //                 <td
  //                   onClick={() => this.button_Clicked(Question_Number, 3)}
  //                   style={
  //                     this.isAnswerExists(Question_Number,3)
  //                       ? { backgroundColor: 'blue' }
  //                       : {}
  //                   }
  //                 >
  //                   3
  //                 </td>
  //                 <td
  //                   onClick={() => this.button_Clicked(Question_Number, 4)}
  //                   style={
  //                     this.isAnswerExists(Question_Number,4)
  //                       ? { backgroundColor: 'blue' }
  //                       : {}
  //                   }
  //                 >
  //                   4
  //                 </td>
  //                 <td
  //                   onClick={() => this.button_Clicked(Question_Number, 5)}
  //                   style={
  //                     this.isAnswerExists(Question_Number,5)
  //                       ? { backgroundColor: 'blue' }
  //                       : {}
  //                   }
  //                 >
  //                   5
  //                 </td>

  //                 <td style = {{border : 0}}></td>
  //                 <td style = {{border : 0}}></td>
  //                 <td style = {{border : 0}}></td>
  //               </div>
  //             </tr>
              
  //           </tbody>
  //         </table>
  //         <div className='question-point-guide'>
  //           <span className='low'>Stable </span>
  //           <span className='high'>Unstable</span>
  //         </div>

  //         {/* Space between lines */}
  //         <hr></hr>
  //         <br></br>
  //         <br></br>
  //       </div>
  //     </div>
  //   );
  // };



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
