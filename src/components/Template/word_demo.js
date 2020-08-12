import React from 'react';

import axios from 'axios';
import Cookies from "js-cookie"


export default class word_Demo extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            data : null,
            letter_code : null,
            letter :null,
            image :null,
            sound : null,

            //Read Cookie data from template
            Cookie : Cookies.get("CourseData")    
        }


        
    }

    async loadData() {            
        

         // Call this state mapping
        var mapping = '/api/letter/'  + this.state.Cookie
        console.log("Mapping Address", mapping)    


        // Create new data
        const data = await axios.get(mapping).then(res => res.data);
    
        this.setState({ data: data });

        console.log("This state data : ", this.state.data)
        // Set for for image, letter, sound
        this.setState({ image: require("../../resources/img/" + this.state.data.image), 
                       letter : this.state.data.letter,
                       sound: require("../../resources/audio/" + this.state.data.sound) 
                   })
         
        
       
    }

    async componentDidMount() {
       await this.loadData()
        this.DisplayInformation(this.state.cookie)
        console.log("ComponentDid Amount : " , this.state.cookie)
    }   

    DisplayInformation(a) {
        
        console.log("Cookie Data",a)
        this.setState({
            
            letter_code : a 

        })

        console.log("What is this course letter_code", this.state.letter_code)
    }
    
    



    render() {

        return (
        <div className = "centerCSS">
            What is word_Demo Cookie for this  : 
           {this.state.Cookie}
        {() => this.DisplayInformation(this.state.Cookie)}
        </div>
        );
    
    }
}