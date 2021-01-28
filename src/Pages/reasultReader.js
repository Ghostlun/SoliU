// @flow strict

import * as React from 'react';
import ResultDisplay from './Result'
import instance from '../apis/instance'
import Cookies, { get } from "js-cookie"


// 여기서 계산을 해준뒤에 데이터를 정리해서 보내준다, 그렇게 되면 가능하다.
class reasultReader extends React.Component {
    
   state = {

        FirebaseData : [],
        UserName_Cookie : "Something",
        ScoreDataSets_Cookie : [],
        
    }

    

    componentDidMount () {

        var resultScore = 0
        var value = Cookies.get("result")
        // 데이터 변환
        let dataSets = JSON.parse(value)

        var userName = Cookies.get("user")

        console.log(userName)
        
        // 실행될때마다 데이터를 넣어준다.
        instance.get('/yzk0062.json').then(response=>{
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
                
                <ResultDisplay childMessage = {this.state.UserName_Cookie} child_Score_dataSets = {this.state.ScoreDataSets_Cookie}
                FireBase_Message = {this.state.FirebaseData}/>

            </div>
        );
    }
}

export default reasultReader;