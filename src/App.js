import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

import Home from './Pages/HomeFirst';
import Error404 from './Error404';
import 'bootstrap/dist/css/bootstrap.min.css';

import Learn from './Pages/Learn';
import Navigation from './components/Navigation';
import PUBLICATIONS from './Pages/Publications';
import Contact from './Pages/Contact';
import MentalAppMain from './components/Learn/Mental_App_Main';
import MentalAppInfo from './components/Learn/Mental_App_Info';
import MentalAppSelfTestMain from './components/Learn/Mental_App_Self_Test_Main';
import MentalAppResourceCenter from './components/Learn/Mental_App_Resource_Center';
import MentalAppChat from './components/Learn/Mental_App_Chat';
import MEMBERS from './Pages/Members';

import IntroDaHye from './components/IntrodoingMember/Intro_dahye'

import OtherApp from './components/Learn/Other_App';

//Impot Intro Yoon js file
import IntroYoon from './components/IntrodoingMember/Intro_yoon'
import IntroYJ from './components/IntrodoingMember/intro_yj'
//research ->learn
const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navigation />

        <Switch>
          {/* Swith Path for component */}
          <Route path='/' component={Home} exact />
          <Route path='/members' component={MEMBERS} exact />
          <Route path='/research' component={Learn} exact />
          <Route path='/research/mental_app' component={MentalAppMain} exact />
          <Route
            path='/research/mental_app/information'
            component={MentalAppInfo}
            exact
          />
          <Route
            path='/research/mental_app/self_test'
            component={MentalAppSelfTestMain}
            exact
          />
          <Route
            path='/research/mental_app/resource_center'
            component={MentalAppResourceCenter}
            exact
          />
          <Route
            path='/research/mental_app/chat'
            component={MentalAppChat}
            exact
          />
          <Route path='/research/others' component={OtherApp} exact />
          <Route path='/contact' component={Contact} exact />

          {/* <Route path='/lab' component={Lab} exact /> */}
          <Route path='/publications' component={PUBLICATIONS} exact />
          <Route path='/contact' component={Contact} exact />
          <Route path='/error404' component={Error404} exact />


          <Route path='/research/others/yoon' component={IntroYoon} exact />
          <Route path='/research/others/yj' component={IntroYJ} exact/>

          <Route path='/research/others/dahye' component={IntroDaHye} exact />

        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
