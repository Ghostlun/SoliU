import React, { Component } from 'react';
import Footer from '../components/Footer';
import Test from '../components/Self_Test'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import Cookies, { get } from "js-cookie"


// uv 는 결과값
// Each type shows each numbers
const data = [
    {name: "Depression", score : 8,   average : 12},
    {name : "Anxiety", score:7 , average : 13},
    {name : "Stress", score :12 , average : 13}

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