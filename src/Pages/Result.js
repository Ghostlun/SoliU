import React, { Component } from 'react';
import Footer from '../components/Footer';
import Test from '../components/Self_Test'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import Cookies, { get } from "js-cookie"
import Self_test from '../components/Self_Test';


// // Object
// const stduent = {
//     name : 'Anna',
//     level: 1
// }

// const {name, level} = stduent


const colors = ["#DB4455", '#3354DB', '#55DB44']

export default class Result extends Component{

    constructor(props){
        super(props)

        this.state = {
            userName : this.calculateResult(0),
            type :[
                {name: 'Depression', result: this.calculateResult(1), average: 13.7 },
                {name: 'Anxiety', result: this.calculateResult(2), average: 14 },
                {name: 'Stress', result: this.calculateResult(3), average: 12},
            
            ]
         }


    }

    componentDidUpdate() {

        this.getName();


    }
    

    calculateResult = (id) => {

        var resultScore = 0
        var value = Cookies.get("result")
        console.log(value)
        // 데이터 변환
        let dataSets = JSON.parse(value)

        var userName = Cookies.get("user")
        console.log("Username" , userName)
    
        console.log("dataSets", dataSets) 

        if (id == 0) {
            return userName;
        }


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
        
    

componentWillUnmount () {

    
}


render () {
    
 return (
    <div>
        <center>
       <div style = {{fontWeight : 'bold', fontSize : '20pt'}}> Here is your Results User name : {this.state.userName} </div>


        <BarChart width={900} height={450} data={this.state.type}
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
    )
}
}