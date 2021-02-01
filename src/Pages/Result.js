import React, { Component } from 'react';
import Footer from '../components/Footer';
import Test from '../components/Self_Test'
import { Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from 'recharts';
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
            return resultScore
        }
        else if (id === 2) {
    
            var i = 5 
            while (i < 10) {
                resultScore = dataSets[i] + resultScore
                i = i + 1
            }
            
            return resultScore
        }
    
        else {
            
            var i = 10
            while (i < 15) {
                resultScore = dataSets[i] + resultScore
                i = i +1
            }
            return resultScore
    
        }
      
        
    }

    function covertingToNumber (dataline) {

        var number_array = []
        number_array = dataline.split(',').map(Number)        
        

        return number_array
    }

    function getAverage(id) {

        // Firebase Data array
        var User_data_score_datalists = props.FireBase_Message
        // Array_data_list
        var array_data

        var Number_of_array = User_data_score_datalists.length

        var scoreFor_Average = 0

        var Depress_Sum = 0 , Anxiety_Sum = 0, Stress_Sum = 0
                

        // Fireabse all Users data
        for (array_data in User_data_score_datalists) { 

            // Get data from send data

            var dataline = User_data_score_datalists[array_data].send_data
            // Data converting
            console.log("Data line ", dataline)
            var dataline_to_array = covertingToNumber(dataline)

            switch(id){
                
                // Depression
                case 1:
                    for(var i = 0; i < 5; i++) {
                        
                        Depress_Sum = Depress_Sum + dataline_to_array[i]
                    }
                    console.log("Score for Depression", Depress_Sum)
                    console.log("Data line array", dataline_to_array)
                   break
                //Anxiety
                case 2:

                    for(var i = 5; i < 10; i++) {
                        
                        Anxiety_Sum = Anxiety_Sum + dataline_to_array[i]
                    }
                    
                    console.log("Anxiety for Sum", Anxiety_Sum)

                    
                break
                    // Stress
                case 3:

                    for(var i=10; i < 15; i++) {
                        
                        Stress_Sum = Stress_Sum + dataline_to_array[i]
                    }
                
                    console.log("Stress for Depression", Stress_Sum)

                
            break

        }

        

    }
        
       
       var output = 0

        if (id == 1) {

            output = (Depress_Sum / Number_of_array ).toFixed(2)
            console.log("Depress_Sum" , Depress_Sum)
            return output
        }
        else if (id == 2) {
            output = (Anxiety_Sum / Number_of_array).toFixed(2) 
            console.log("Depress_Sum", Anxiety_Sum)

            return output

        }
        else if (id == 3) {

            output = (Stress_Sum / Number_of_array).toFixed(2)
            console.log("Stress_Sum,", Stress_Sum)
            return output
        }

        
        

    }


    const type = [
        {name: 'Depression', result: calculateResult(1), average: getAverage(1) },
        {name: 'Anxiety', result: calculateResult(2), average: getAverage(2) },
        {name: 'Stress', result: calculateResult(3), average: getAverage(3) },
                    
                    ]

    const game = 1

    return(
        <div>
             <div>
        <center>
       <div style = {{fontWeight : 'bold', fontSize : '30pt'}}> Mental-Health Test Result for  {props.childMessage}</div>


        <BarChart width={900} height={450} data={type}
        margin = {{top :30, right : 30, left: 20, bottom :5}}
        >
        <XAxis dataKey = "name"  style = { {fontWeight : "bold"}} />
        <YAxis  domain = {[0,25]} label={{ value: 'Score', angle: -90, position: 'insideLeft' }}
                style = {{fontWeight : "bold"}} />


        <Tooltip />
        <Legend />
        
        <Bar dataKey="result" fill = "#55DB44" barSize = {50}>
        </Bar>

        <Bar dataKey = "average" fill = "#3354DB" barSize = {50}>
        
        </Bar>

       
        </BarChart> 
        
        <div  className = "Result_text">
            <div style = {{color : "green" , display : 'inline' , fontWeight : 'bold'}}> Green bar </div >shows your score
            <br></br>
            <div style = {{color : "blue" , display :'inline', fontWeight : 'bold' ,  fontSize : "50sp "}}> Blue bar </div>shows your average score
        </div>
        
        <Footer/>
        </center>

    </div>
        </div>
    )

    
}

export default Result

