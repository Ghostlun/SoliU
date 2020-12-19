import React, { Component } from 'react';
import Footer from '../components/Footer';
import Test from '../components/Self_Test'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import Cookies, { get } from "js-cookie"


// // Object
// const stduent = {
//     name : 'Anna',
//     level: 1
// }

// const {name, level} = stduent



const DataClass = () => {


    const calculateResult = (id) => {

        var resultScore = 0
        // var dataSets = Cookies.get("result")
        var dataSets = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        if (id === 1){
    
            var i = 0 
            while (i < 5) {
    
                resultScore = dataSets[i] + resultScore
                
            }
            console.log("Depression score",  resultScore)
            return resultScore
        }
        else if (id === 2) {
    
            var i = 5 
            while (i < 10) {
                resultScore = dataSets[i] + resultScore
            }
            console.log("Anxiety score",  resultScore)
            
            return resultScore
        }
    
        else {
            
            var i = 10
            while (i < 10) {
                resultScore = dataSets[i] + resultScore
            }
            console.log("Stress score",  resultScore)
            
            return resultScore
    
        }
        
    
    }

    
    const data = [
        {name: 'Depression', result: calculateResult(1), average: 13.7 },
        {name: 'Anxiety', result: calculateResult(2), average: 14 },
        {name: 'Stress', result: calculateResult(3), average: 12},
    
    ]

    return data
}


// Data format



// // Data format
// const data = [
//     {name: 'Depression', result: 1, average: 13.7 },
//     {name: 'Anxiety', result: 2, average: 14 },
//     {name: 'Stress', result: 3, average: 12},

// ];


const colors = ["#DB4455", '#3354DB', '#55DB44']

export default class Result extends Component{

    constructor(props){
        super(props)

        this.state = {
           
            type :[
                {name: 'Depression', result: this.calculateResult(1), average: 13.7 },
                {name: 'Anxiety', result: this.calculateResult(2), average: 14 },
                {name: 'Stress', result: this.calculateResult(3), average: 12},
            
            ]
         }


    }

    calculateResult = (id) => {

        var resultScore = 0
        var value = Cookies.get("result")
        console.log(value)
        // 데이터 변환
        let dataSets = JSON.parse(value)
    
        console.log("dataSets", dataSets) 
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
        
    

componentDidMount () {


    
}


render () {

 return (
    <div>
        <center>
        Here is your Results

        <BarChart width={900} height={450} data={this.state.type}
        margin = {{top :5, right : 30, left: 20, bottom :5}}
        >
        <XAxis dataKey = "name"  />
        <YAxis />

        <Bar dataKey="result" fill = "#55DB44" barSize = {50}>
        </Bar>

        <Bar dataKey = "average" fill = "#3354DB" barSize = {50}>
        
        </Bar>
       
        </BarChart> 
        
        
        <Footer/>
        </center>

    </div>
    )
}
}