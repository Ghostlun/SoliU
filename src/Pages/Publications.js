import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../asset/css/style.css'

const Publications = () => {
  return (

<div>
  <div className = "info"> 
    
    <div>

      <div>
        {/* Title page */}
        <h1><b>Publications</b></h1>

      </div>

      <div>
        {/* Reaserach Paragraph 1 : Current Reaserach  */}
          <h4>Current Research</h4>
          
          <h5><b>Title: </b> Mental health issues and mobile healthcare: the effects of chatting app to increase accessibility and engagement of health resources on college campus 
          </h5>

          <h5><b>Purpose: </b> This study is to examine the role of mobile application to increase accessibility and engagement of health resources
          </h5>
          </div>

    </div>


      <div className = "paragraph">
          {/*Research Paragraph 2  : Honors and Awards*/}
       <h4>Honors & Awards</h4>
        <content>
          <div>2020: International Public Relations Research Conference (IPRRC), Koichi Yamamura International Strategic Communication Award (Solo author / $1,000) </div>
          <div> 2019: The Corey Edwards Organization Advisor of the Year Award, Auburn University</div>
          <div>2019: First Place Faculty Paper Award, KACA, AEJMC (1st Author)</div>
          <div>2019: International Public Relations Research Conference (IPRRC), the International ABERJE Award (2nd author / $1,000) </div>
        </content>


      </div>

    
    {/* Reserach Paragraph 3 : Journal Awards */}
    <div className = "paragraph">
    <h4>Journal Articles</h4>
      <content >
      <li>Chon, M. & Park, H. (2020). Social media activism in the digital age: Testing an integrative model of activism on contentious issues. Journalism & Mass Communication Quarterly 97(1) 72-97.
      <a href=" https://doi.org/10.1177/1077699019835896"style ={{marginLeft : 10}}>link</a> </li>

      <li>Chon, M. Lee, H., & J.-N., Kim. (2020). Values of government public relations for a rocky road to participatory democracy: Testing public engagement, empowerment, and serenity hypotheses in public sector communication. Partecipazione e Conflitto [Participation and Conflict], 13(2) 2020:1110-1131.
      <a href=" http://siba-ese.unisalento.it/index.php/paco/article/view/22504" style ={{marginLeft : 10}}>link</a> </li>

      <li>Chon, M. (2019). Government public relations when trouble hits: exploring political dispositions, situational variables, and government–public relationships to predict communicative action of publics. Asian Journal of Communication, 29(5), 424-440,
      <a href="  10.1080/01292986.2019.1649438" style ={{marginLeft : 10}} >link</a> </li>

      <li>Chon, M. & Park, H. (2017). All does not fit all: Health audience segmentation and prediction of health behaviors in cancer prevention. Health Marketing Quarterly, 34, pp. 202-216.
      <a href="http://dx.doi.org/10.1080/07359683.2017.1346434  " style ={{marginLeft : 10}} >link</a> </li>


      <li>Chon, M. & Park, H. (2019). Predicting public support for government actions in a public health crisis: Testing fear, positive organization-public relationship, and behavioral intention in the framework of the situational theory of problem solving. Health Communication. Online First.
      <a href="https://doi.org/10.1080/10410236.2019.1700439" style ={{marginLeft : 10}}>link</a> </li>

      <li>Chon, M. & Fondren, E. (2019). Seeing a crisis through colored glasses: How partisan media leads to attribution of crisis responsibility and government trust. Journal of Public Affairs, 19(4), 1-9.
      <a href="  https://doi.org/10.1002/pa.1950 " style ={{marginLeft : 10}} >link</a> </li>

      <li>Jeong, J., Kim, Y., & Chon, M. (2018). The importance of online communication behaviors for coping processes and outcomes of dementia patients and their caregivers. Health Communication, 33:1, 5-13. 
      <a href=" http://dx.doi.org/10.1080/07359683.2017.1346434 " style ={{marginLeft : 10}}>link</a> </li>

      <li>Chon, M. & Kim, J.-N. (2016). Understanding active publics and their communicative action through public segmentation: Applying situational theory of problem solving to public segmentation in an organizational crisis situation. Journal of Public Relations, 20(3), 113-138.*
      <a href=" http://dx.doi.org/10.1080/07359683.2017.1346434 " style ={{marginLeft : 10}}>link</a> </li>

      <li>Park, H., Reber, B., & Chon, M. (2016). Tweeting as Health communication: Health organizations' use of Twitter for health promotion and public engagement. Journal of Health Communication, 21(2), 188-198.
      </li>

    
      <li>Kim, Y., Miller, A., & Chon, M. (2016). Communicating with key publics in crisis communication: The synthetic approach to the public segmentation in CAPS (Communicative Action in Problem Solving). Journal of Contingencies and Crisis Management, 24(2), 82-94.  
      </li>

      <li>Kim, Y., Chon, M., & Miller, A. (2015). Cross-national ongoing crisis communication on social media: A comparative analysis of Twitter regarding Asiana Airlines crash crisis in South Korea and US. Asian Communication Research, 11(1), 22-51. 
      </li>

      </content>


    </div>

        
        
    {/* Reserach Paragraph 4 : Book Chapter and Inviteid Articles */}   
    <div className = "paragraph">

      <h4>Book Chapter and Invited Articles</h4>

      <li>J.-N. Kim, L. Tam, & Chon, M. (Accepted). Conceptual genealogy of the situational theory of problem solving: Theorizing communication for strategic behavioral communication management. In Chiara, Valentini (Ed.), Handbook of Public Relations.</li>
      <li>Lee, Y., Chon, M., Oh Y., & Kim, J. (2017). Understanding communicative activism of publics in digital networked society: A taxonomy of digitalized communicative actions. In Sandra C. Duhé (Ed.), New Media and Public Relations (3rd ed.), Peter Lang.</li>
      <li>Chon, M. & Park, S. (May Issue 2, 2019). Employee communication behaviors and scouting: Two pillars to build sustainable innovation. Dong-A Business Review. 우호적커뮤니케이션과 스카우팅: 지속가능한 혁신을 위한 두 가지 축</li>


      <li><a href=" https://dbr.donga.com/article/view/1101/article_no/9139" style = {{fontSize : 10}}>https://dbr.donga.com/article/view/1101/article_no/9139
      </a></li>

    </div>







  </div>
  {/*  End info */}

  <Footer />
</div>
  );
};

export default Publications;
