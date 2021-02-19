import React, { Component } from 'react';
import Footer from '../components/Footer';
import Test from '../components/Self_Test'
import { Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from 'recharts';
import Cookies, { get } from "js-cookie"






const Result = (props) => {


    const type = [
        {name: 'Depression', result: calculateResult(1), average: getAverage(1) },
        {name: 'Anxiety', result: calculateResult(2), average: getAverage(2) },
        {name: 'Stress', result: calculateResult(3), average: getAverage(3) },
        {name: 'Total Average', result : calculateResult(4), average : getAverage(4)}

                    
                    ]


    function calculateResult (id)  {

        var resultScore = 0
        var value = Cookies.get("result")
        // 데이터 변환
        let dataSets = JSON.parse(value)
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
    
        else if (id === 3) {
            
            var i = 10
            while (i < 15) {
                resultScore = dataSets[i] + resultScore
                i = i +1
            }
            return resultScore
    
        }

        else if ( id == 4) {

            var i = 0 
            while (i<15) {

                resultScore = dataSets[i] + resultScore
                i = i + 1
            }


            return (resultScore/3).toFixed(2)
        }

        else return 0
      
        
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

        var Depress_Sum = 0 , Anxiety_Sum = 0, Stress_Sum = 0, averageSum = 0
                

        // Fireabse all Users data
        for (array_data in User_data_score_datalists) { 

            // Get data from send data

            var dataline = User_data_score_datalists[array_data].send_data
            // Data converting
            var dataline_to_array = covertingToNumber(dataline)

            switch(id){
                
                // Depression
                case 1:
                    for(var i = 0; i < 5; i++) {
                        
                        Depress_Sum = Depress_Sum + dataline_to_array[i]
                    }
            
                   break
                //Anxiety
                case 2:

                    for(var i = 5; i < 10; i++) {
                        
                        Anxiety_Sum = Anxiety_Sum + dataline_to_array[i]
                    }
                    

                    
                break
                    // Stress
                case 3:

                    for(var i=10; i < 15; i++) {
                        
                        Stress_Sum = Stress_Sum + dataline_to_array[i]
                    }
                break

                case 4 :
                    for (var i = 0; i <15; i++) {
                        
                        averageSum = averageSum +  dataline_to_array[i]

                    }
        }

    }
        
       
       var output = 0

        if (id == 1) {

            output = (Depress_Sum / Number_of_array ).toFixed(2)
            return output
        }
        else if (id == 2) {
            output = (Anxiety_Sum / Number_of_array).toFixed(2) 

            return output

        }
        else if (id == 3) {

            output = (Stress_Sum / Number_of_array).toFixed(2)
            return output
        }

        else if ( id == 4) {

            output = (averageSum/Number_of_array/3).toFixed(2)

            return output
        }

    }

    // Depression, Anxiety, Stress
    function labelDisplay (label) {
        var label, currentScoreShow,averageScoreShow
        var dataTurple = [label, currentScoreShow, averageScoreShow]

        if (label  === 'Depression') {
            currentScoreShow = type[0].result
            averageScoreShow = type[0].average
            return dataTurple  = [label, currentScoreShow, averageScoreShow]
        }
        else if (label === 'Anxiety') {
            currentScoreShow = type[1].result
            averageScoreShow = type[1].average
            return dataTurple  = [label, currentScoreShow, averageScoreShow]
        }
        else if (label === 'Stress') {
            currentScoreShow = type[2].result
            averageScoreShow = type[2].average
            return dataTurple  = [label, currentScoreShow, averageScoreShow]
        }

        else if (label === 'Total Average') {
            currentScoreShow = type[3].result
            averageScoreShow = type[3].average
            return dataTurple  = [label, currentScoreShow, averageScoreShow]
        }

        else {
            
            return
        }        

    }

    function CustomToolTip ({active, payload, label}) {
        
        var data 
        if (active)  {
             
                if (label === 'Depression')
                 {   data = labelDisplay(label)
                    return <div className = 'toolBox'>
                     Your Depression Score :   {data[1]} <br/>
                     Your Average Score : {data[2]}
                    </div>
                 }
                else if (label === 'Anxiety') {
                    data = labelDisplay(label)
                    return <div className = 'toolBox'>
                    Your Anxiety Score :  {data[1]} <br/>
                    Your Average Score  : {data[2]}
                    </div>
                }
                   
                else if (label === 'Stress') {
                    data = labelDisplay(label)
                    return <div className = 'toolBox'>
                    Your Stress Score :  {data[1]} <br/>
                    Your Average Score :  {data[2]}
                    </div> }
                    
                else if (label === 'Total Average') {
                  
                    data = labelDisplay(label)
                    return <div className = 'toolBox'>
                            This is Average score of your three scores
                            <div style ={{fontWeight : "bold"}}> Your score average is  {data[1]} </div>
                            <div  style = {{fontWeight : "bold"}}> Your  average score is  {data[2]} </div>
                            </div>
                    }
    
                else return <div>
                    Score : {type.name}
                </div>
        }

        else {
            return null
        }
    }

   
  

    return(
        <div>
             <div>
        <center>


       <div style = {{fontWeight : 'bold', fontSize : '30pt'}}> Mental-Health Test Result for  {props.childMessage}</div>


       <div  className = "Result_text">
            <div style = {{color : "orange" , display : 'inline' , fontWeight : 'bold'}}> Orange bar </div >shows your score
            <br></br>
            <div style = {{color : "blue" , display :'inline', fontWeight : 'bold' ,  fontSize : "50sp "}}> Blue bar </div>shows your past average score
        </div>


        <BarChart width={900} height={450} data={type}
        margin = {{top :30, right : 30, left: 20, bottom :5}}
        >
        <XAxis dataKey = "name"  style = { {fontWeight : "bold"}} />
        <YAxis  domain = {[0,25]} label={{ value: 'Score', angle: -90, position: 'insideLeft' }}
                style = {{fontWeight : "bold"}} />



        <Tooltip content = {CustomToolTip} />
        <Legend />
        
        <Bar dataKey="result" fill = "orange" barSize = {50}>
        </Bar>

        <Bar dataKey = "average" fill = "#3354DB" barSize = {50}>
        
        </Bar>

       
        </BarChart> 
        
     
        
        <Footer/>
        </center>

    </div>
        </div>
    )

    
}

export default Result

