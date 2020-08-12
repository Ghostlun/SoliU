
import React, { Component } from "react";
import Cookies from "js-cookie"


export default class form extends Component {

  constructor(props) {
    super(props);


    this.state = {
      link: null,
      courseNumber: null,
      GetCourseID : Cookies.get("CourseData")
    }

    

  }

 buttonClicked = (courseNumber)=> {

    var selection = courseNumber

    console.log("Button Clicked", courseNumber)

    this.setState({

        courseNumber:selection

    })

    console.log("This state courseNumner", this.state.courseNumber)
    this.displayComponent()
 }

 
displayComponent =(CourseID) =>{



    switch(this.state.courseNumber) {

 
       
        case(1) : return <iframe width="1280px" height= "800px" src= "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=GyJB97x15kunMjm_cIDzVgU4OSXv0ktEs4tSCRkZ80pUNUpYRjlOSU9ENlZTNUM2TFFZSVhXUVhaSyQlQCN0PWcu&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" styles= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        case(2) : return <iframe width="1280px" height= "800px" src= "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=GyJB97x15kunMjm_cIDzVgU4OSXv0ktEs4tSCRkZ80pUM0dZWFZTMTJMMDU2WVBNSTQzS1FJUEE1RiQlQCN0PWcu&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" styles= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        case(3) : return <iframe width="1280px" height= "800px" src= "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=GyJB97x15kunMjm_cIDzVo2-hZLJHDBAlmayRL9duoBURUFXVFlKUVFCRkJNUzI0NzBIQkRKMEFQNC4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" styles= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>        
        case(4) : return <iframe width="1280px" height= "800px" src= "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=GyJB97x15kunMjm_cIDzVgU4OSXv0ktEs4tSCRkZ80pUQjJTVEkwV0ZDQjc3TzZEN09aUDZSMUU1UCQlQCN0PWcu&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" styles= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        case(5) : return <iframe width="1280px" height= "800px" src= "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=GyJB97x15kunMjm_cIDzVgU4OSXv0ktEs4tSCRkZ80pUNUpYRjlOSU9ENlZTNUM2TFFZSVhXUVhaSyQlQCN0PWcu&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" styles= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        case(6) : return <iframe width="1280px" height= "800px" src= "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=GyJB97x15kunMjm_cIDzVgU4OSXv0ktEs4tSCRkZ80pUMVdIWlFXOU5FNEdBNlZaOU5BTDZHWkU4UCQlQCN0PWcu&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" styles= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
      

        default : return <div>Select the course.</div>
        
        } 
    

    }

 

    displayButton (){

        return <div>

        <button onClick = {()=>this.buttonClicked(0)} > Course0</button>
        <button onClick = {()=>this.buttonClicked(1)} > Course1</button>
        <button onClick = {()=>this.buttonClicked(2)} > Course2</button>
        <button onClick = {()=>this.buttonClicked(3)} > Course3</button>
    
        <button onClick = {()=>this.buttonClicked(4)} > Course4</button>
        </div>

    
    }

  render() {

    return <div>


{this.displayButton()}
  <div className="scrollbox-element">

{   this.displayComponent()}   
</div>


</div>

}
}

