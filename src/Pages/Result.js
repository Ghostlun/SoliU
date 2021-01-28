import React, { Component } from 'react';
import Footer from '../components/Footer';
import Test from '../components/Self_Test'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import Cookies, { get } from "js-cookie"


const colors = ["#DB4455", '#3354DB', '#55DB44']


// 여러가지 문제가 있다; 
// 문제 1: 데이터를 가져오지 못함

// @flow strict



const Result = (props) => {

    function calculateResult (id)  {


        var resultScore = 0
        var value = Cookies.get("result")
        // 데이터 변환
        let dataSets = JSON.parse(value)

        var userName = Cookies.get("user")

        var resultScore = 0
        

        if (id === 1){
    
            var i = 0 
            while (i < 5) {
    
                resultScore = dataSets[i] + resultScore
                i = i + 1
            }
            console.log("Depression score",  resultScore)
            return resultScore
        }
        else if (id === 2) {
    
            var i = 5 
            while (i < 10) {
                resultScore = dataSets[i] + resultScore
                i = i + 1
            }
            console.log("Anxiety score",  resultScore)
            
            return resultScore
        }
    
        else {
            
            var i = 10
            while (i < 15) {
                resultScore = dataSets[i] + resultScore
                i = i +1
            }
            console.log("Stress score",  resultScore)
            return resultScore
    
        }
      
        
    }

    function covertingToNumber (dataline) {

        var number_array = []

        numb
        

        return number_array
    }

    function getAverage(id) {

        var User_data_score_datalists = props.FireBase_Message
        var array_data
        var inside_data
        console.log(props.FireBase_Message)
        var scoreFor_Average = 0
        var send_data
        
        // Map converting
        // let numberArray = stringArray.map(Number)


        // Fireabse all Users data
        for (array_data in User_data_score_datalists) { 

            // Get data from send data

            var dataline = User_data_score_datalists[array_data].send_data
            

            console.log("Data line ", dataline)
            switch(id){
                
                // Depression
                case 1:
                    for(var i=0; i < 5; i++) {
                        
                        // scoreFor_Average = scoreFor_Average + numberArray[i]
                    }


                   break
            //     //Anxiety
            //     case 2:

            //         for(var i=5; i < 10; i++) {
                        
            //             scoreFor_Average = scoreFor_Average + User_data_score_datalists[i].send_data
            //         }

            //         return scoreFor_Average/5

            // break
            //         // Stress
            //     case 3:

            //         for(var i=0; i < 15; i++) {
                        
            //             scoreFor_Average = scoreFor_Average + User_data_score_datalists[i].send_data
            //         }

            //         return scoreFor_Average/5

            // break

        }

        }

        
        console.log(scoreFor_Average)
        return scoreFor_Average/5
    }


    const type = [
        {userName: ""},
        {name: 'Depression', result: calculateResult(1), average: getAverage(1) },
        {name: 'Anxiety', result: calculateResult(2), average: getAverage(2) },
        {name: 'Stress', result: calculateResult(3), average: getAverage(3) },
                    
                    ]

    const game = 1

    return(
        <div>
             <div>
        <center>
       <div style = {{fontWeight : 'bold', fontSize : '20pt'}}> Here is your Results User name : {props.childMessage} </div>


        <BarChart width={900} height={450} data={type}
        margin = {{top :20, right : 30, left: 20, bottom :5}}
        >
        <XAxis dataKey = "name"  />
        <YAxis />

        <Bar dataKey="result" fill = "#55DB44" barSize = {50}>
        </Bar>

        <Bar dataKey = "average" fill = "#3354DB" barSize = {50}>
        
        </Bar>
       
        </BarChart> 
        
        <div>
            <div style = {{color : "green" , display : 'inline' , fontWeight : 'bold'}}> green bar </div >shows your score

        </div>
        
        <div>
            <div style = {{color : "blue" , display :'inline', fontWeight : 'bold' }}> blue bar </div>shows average score
        </div>
        
        <Footer/>
        </center>

    </div>
        </div>
    )

    
}

export default Result




// export default class Result extends Component{

//     constructor(props){
//         super(props)

//         this.state = {
//             persons : [],
//             type :[
//                 {name: 'Depression', result: this.calculateResult(1), average: this.getAverage() },
//                 {name: 'Anxiety', result: this.calculateResult(2), average: this.getAverage() },
//                 {name: 'Stress', result: this.calculateResult(3), average: this.getAverage() },
            
//             ]
            
//          }


//     }

//     getAverage = () => {

//         var data = this.props.FireBase_Message

//         console.log(data)

//     }

   

//     calculateResult = (id) => {


         
//     }
        
    

// render () {
    
//  return (
    // <div>
    //     <center>
    //         <div> {this.props.FireBase_Message.map(home => <div>{home.send_data}</div>)}</div>
    //    <div style = {{fontWeight : 'bold', fontSize : '20pt'}}> Here is your Results User name : {this.props.childMessage} </div>


    //     <BarChart width={900} height={450} data={this.state.type}
    //     margin = {{top :20, right : 30, left: 20, bottom :5}}
    //     >
    //     <XAxis dataKey = "name"  />
    //     <YAxis />

    //     <Bar dataKey="result" fill = "#55DB44" barSize = {50}>
    //     </Bar>

    //     <Bar dataKey = "average" fill = "#3354DB" barSize = {50}>
        
    //     </Bar>
       
    //     </BarChart> 
        
    //     <div>
    //         <div style = {{color : "green" , display : 'inline' , fontWeight : 'bold'}}> green bar </div >shows your score

    //     </div>
        
    //     <div>
    //         <div style = {{color : "blue" , display :'inline', fontWeight : 'bold' }}> blue bar </div>shows average score
    //     </div>
        
    //     <Footer/>
    //     </center>

    // </div>
//     )
// }
// }