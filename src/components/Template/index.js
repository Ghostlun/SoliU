import React, {Component, useRef} from "react";
import axios from 'axios';
import Cookies from "js-cookie";




//Import Template :

import TrueFalseQuiz from "./TrueFalsequiz"
import MutipleQuiz from "./mutlple"
import { Link } from "react-router-dom";
import Microsoft from "./form"
import bgImg from '../../assets/img/background/QuizBack.png'




export default class dynamicTemplate extends Component {

 constructor(props) {
    super(props);
    this.state = {
            pageType: 0,
            setPageVisble : 1,
            Loade_Course_Data : null,
            CourseInfo : null,
            

            GetCourseID : Cookies.get("CourseData")
            
    }
   
    console.log("What id GetCourseID ", this.state.GetCourseID)
    console.log("This page type", this.state.pageType);
    
 }


//Load Data based on CourseID
async loadData(courseID) {

   console.warn("mapping address")
   var mappingAddress = "/api/page/" + this.state.GetCourseID;
   //Data from CourseID
   const loadedData = await axios.get(mappingAddress).then(res =>res.data);
   this.setState({

      Loade_Course_Data : loadedData,
      CourseInfo : loadedData.data
   })

   console.log("Loaded Data", loadedData)
   console.log("CourseInfo", this.state.CourseInfo)


   //Cookie data for CourseInfo
   Cookies.set("CourseData", this.state.CourseInfo);
}

 



//  CourseSelection() {

//     return (
    



 //When course button is clicked, CoursID 
 CourseButtonClicked = (courseID) => {

   var ID = courseID
   this.setState ({

      setPageVisble : true
   })

   this.loadData(ID);

   console.log("Set Visible :"  , this.state.setPageVisble)
   
 }


 NextPage = () => {

   this.setState ({

      pageType : this.state.pageType + 1
   })
   
   // pageNumber = this.state.pageNumber;
   console.log("Page Number", this.state.pageType)
   
 }



 async componentDidMount() {
   this.loadData()   
 }


   
 
//Display dynamic components :
   DisplayComponents() {

      console.log("Display component page type", this.state.pageType)
      switch(this.state.pageType) {

         case(0) : return <Microsoft/>

        
         case(1) : return <MutipleQuiz/>

         case(2) : return <TrueFalseQuiz/>

         default : return this.reset()

         
         }         


      
   }

   reset = () => {
      Cookies.remove("CourseInfo");
       window.location.href = `${process.env.PUBLIC_URL + "/k-learning"}`
  
   }
    
   DisplayButton() {
      return  (
         
         <div className = "centerCSS">

         <button onClick = {this.NextPage} style = {{color : "blue"}}>Next page Button</button>

         </div>
      )


      
   }




   DisplayThings() {
      
      if (this.state.setPageVisble == 1)
         
      return (
         <div className = "container">
         {this.DisplayButton()}
         {this.DisplayComponents()}
         </div>
      )
      else 
         return (
         <div className = "container" style = {{margin : 50}}>
           Please Select dourse Number 
         </div>

      )
      
   }
   








    render () {
 

       return  ( 

       <div>
          <center>
             <div className ="QuizExplanation" style ={{color: "black" , marginBottom : "20px"} }>
        Welcome to Learning course
       </div>
       </center>

         {/* {this.CourseSelection()} */}

         {this.DisplayThings()}


       </div>

       
    )
   

    
   }

}

