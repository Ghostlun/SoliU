import React, { Component } from 'react';
import Footer from '../components/Footer';
import Test from '../components/Self_Test'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import Cookies, { get } from "js-cookie"




const showScore = (value) => {

   var dataSaved = Cookies.get("result")
// Object로 변환 완료
   let obj = JSON.parse(dataSaved)

   var depressionScore = 0 
   var anxietyScore = 0
   var stressScore = 0
   
   var i = 0
   while (i < 15) {

        if (i <5) {

            depressionScore = depressionScore + obj[i]
        }
        
        if (i <10) {

            anxietyScore = anxietyScore + obj[i]
        }

        if (i <15) {

            stressScore = stressScore + obj[i]
        }
    
    i = i + 1;
   }
   console.log()
   console.log(depressionScore);
   console.log(anxietyScore);
    if (value === 1)

        
        return depressionScore

    else if (value === 2)

        return anxietyScore
    
    else if (value === 3)

        return stressScore

    
}




// uv 는 결과값
// Each type shows each numbers
const data = [
    {name: "Depression", score : showScore(1),   average : 12},
    {name : "Anxiety", score: showScore(2) , average : 13},
    {name : "Stress", score : showScore(3), average : 13}

];

// const data = [
//     {name: "Depression", uv: 5 , pv : 3},
//     {name : "Anxiety", uv:2, pv : 3},
//     {name : "Stress", uv :3 , pv :3 }
                
//         ];
        

const colors = ["#DB4455", '#3354DB', '#55DB44']

export default class Result extends Component{

    constructor(props){
        super(props)

        


    }


    // changeColor = (dataName) => {

    //     if (dataName === "D_id")

    //         return "#DB4455"

    //     else if (dataName === "A_id") {


    //         return "#3354DB"
    //     }

    //     else if (dataName === "S_id") {
    //         return "#55DB44"
    //     }
    // }

render () {

 return (
    <div>
        <center>
        Here is your Results

        <BarChart width={900} height={450} data={data}
        margin = {{top :5, right : 30, left: 20, bottom :5}}
        >
        <XAxis dataKey = "name"  />
        <YAxis />
        <Bar dataKey="score" fill = "#55DB44" barSize = {50}>
      
        
        
        </Bar>
       
        </BarChart> 
        
        
        <Footer/>
        </center>

    </div>
    )
}
}