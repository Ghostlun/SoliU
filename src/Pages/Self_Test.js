import React from 'react';
import Footer from '../components/Footer';
import MainImage from '../components/Main_Image';
import ContactAll from '../components/Contact/Contact_All';
import Contact_Thing from '../components/Comp_Contact'
import '../asset/css/test.css'
const Contact = () => {
  return (
    
    <div>
    <div class="bg page-program-type-questions">
        <div class="bg-top">
            <h1>심리검사</h1>
            <h2>STEP1. 나의 심리상태 평가하기</h2>
            <h3>한 주간의 심리상태는 어땠나요? 나의 심리상태를 평가해주세요.</h3>
        </div>
    </div>

    <div class="page" id="program-type-questions">
        <div class="program-progress-bar">
            <span class="program-progress-bar-percent">10%</span>
            <div class="program-progress-bar-full">
                <div class="program-progress-bar-fill" style = {{width: '100px'}}> </div>
            </div>
        </div>
        <div class="program-type-questions-point">
            <h4>Q. 나의 일상 속 우울함은 어느 정도일까요?</h4>
            <table class="pre-program-psychological-answer-table depression">
                <tbody><tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                </tr>
            </tbody></table>
            <div class="question-point-guide">
                <span class="low">매우 안정 </span>
                <span class="high">매우 불안정</span>
            </div>

    
    <div>
      
     </div>
     </div>
     </div>
     
     
     <Footer/>
     </div>
  );
};

export default Contact;
