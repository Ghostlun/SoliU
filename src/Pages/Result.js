import React, { Component } from 'react';
import Footer from '../components/Footer';
import Test from '../components/Self_Test'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import Cookies, { get } from "js-cookie"
import Self_test from '../components/Self_Test';
import Fireabse from '../firebase'
import axios from 'axios'





const colors = ["#DB4455", '#3354DB', '#55DB44']



export default class Result extends Component{

    constructor(props){
        super(props)

        this.state = {
            userName : this.calculateResult(0),
            persons : [],
            type :[
                {name: 'Depression', result: this.calculateResult(1), average: this.getAverage() },
                {name: 'Anxiety', result: this.calculateResult(2), average: this.getAverage() },
                {name: 'Stress', result: this.calculateResult(3), average: this.getAverage() },
            
            ]
         }


    }

    getAverage = () => {

        axios.get(`https://soliu-69a78.firebaseio.com/yzk0062/`)
        .then(res => {
          const persons = res.send_data;
          this.setState({ persons });
        })
        console.log("Game")

    }

   

    calculateResult = (id) => {

        var resultScore = 0
        var value = Cookies.get("result")
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