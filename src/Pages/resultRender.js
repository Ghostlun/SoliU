// @flow strict

import * as React from 'react';
import ResultChart from './Result'
import instance from '../apis/instance'
import Cookies, { get } from "js-cookie"

// resultRender
class resultRender extends React.Component {
    
   state = {

        FirebaseData : [],
        UserName_Cookie : "Something",
        ScoreDataSets_Cookie : [],
        
    }


    componentDidMount () {

        var value = Cookies.get("result")
        // 데이터 변환
        let dataSets = JSON.parse(value)
        var userName = Cookies.get("user")
        
        var jsonAddress = '/' + userName + '.json'
        
        // 실행될때마다 데이터를 넣어준다.
        instance.get(jsonAddress).then(response=>{
        const fetchedResult = [];
        for(let key in response.data){
            fetchedResult.unshift(
                {
                    ...response.data[key],
                    id : key
                }
            )
        }
        this.setState ({
            
            FirebaseData: fetchedResult,
            UserName_Cookie : userName
         
        })
    })

    
    
}

   

    


    
    render() {

        

        return (

            
            <div>
                
                <ResultChart childMessage = {this.state.UserName_Cookie} child_Score_dataSets = {this.state.ScoreDataSets_Cookie}
                FireBase_Message = {this.state.FirebaseData}/>

            </div>
        );
    }
}

export default resultRender;