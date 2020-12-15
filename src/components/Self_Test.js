import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../asset/detail/test.css';
import fireabse from '../firebase';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';
import questionJson from "../question.json";


export default class Self_test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInfo: null,
      progress: 0,
      dataSaved: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      isReady: false,
      name: '',
      warningLevel: 0,
      totalScore: 0,
      buttonColors: null,
      savedValue : []
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

  //Submit with value
  handle_submit = (e) => {
    //Converting data
    var target = e.toString();
    var nameData = this.state.name;
    
    if (nameData.includes("#,&,@")){

      this.state.isReady = false;

    }

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
        dataSaved: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

    while (i < 15) {
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


          <div>   <b>Successfully Submit</b></div>
       <button >    <Link to = {"/research/mental_app/self_test/result"} >Show the result</Link>
       </button>
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

    // Value code =  Question Number + score number
    var valueCode = arrayStr + scoreStr
    // console.log("ValueCode", valueCode)

    
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
   
  










    // // State saved value 계속 바뀝니다
    // for (var i = 0; i < 16; i++) {
      
      
    //   console.log("valueCode:", valueCode);

    //   if (valueCode.length == 2){
    //   data = this.state.savedValue[i];
  
    //   console.log("Data", data)
    //   first_letter =  data.charAt(0);
    //   console.log("This value Code is 2")
    //   console.log("first_letter 3", first_letter)
    //   }
    //   if (valueCode.length == 3){
    //     data = this.state.savedValue[i];

    //     first_letter = data.toString().subString(0,1)
    //     console.log("This value Code is 3")

    //     console.log("first_letter 4" , first_letter)
    //   }
      
      
    //   // 만약에 같은 문제의 데이터가 존재한다면
    //   if (first_letter == arrayStr) {
      
    
    //   // Replace
    //    this.state.savedValue[i] = (valueCode);

    //   }
      

    //   else {
    //     this.state.savedValue.push(valueCode);


    //   }
    // }
  // }

  // else {
  //   this.state.savedValue.push(valueCode);  
  // }

    
  

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
                <div>
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
                 </div>
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
          {/* {this.displayQuestion(
            'Q1. How much is the depression in my daily life',
            0
          )} */}

            {/* {this.displayQuestion('Q2. How much anxiety is in my daily life?', 1)}
            {this.displayQuestion( "Q3. How much is the psychological trauma in my daily life?", 2)}
            {this.displayQuestion( "Q4. How negative is my mindset?",3)}
            {this.displayQuestion( "Q5. How far is my self-esteem?",4)}
            {this.displayQuestion( "Q6. If there are any problems with my interpersonal relationships, how much?",5)} */}

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
