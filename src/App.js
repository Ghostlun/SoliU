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
import About from './Pages/About';
import Learn from './Pages/Learn';
import Navigation from './components/Navigation';
import Lab from './Pages/Lab';
import Contact from './Pages/Contact';
import MentalAppMain from './components/Learn/Mental_App_Main';
import MentalAppInfo from './components/Learn/Mental_App_Info';
import MentalAppResourceCenter from './components/Learn/Mental_App_Resource_Center';
import MentalAppChat from './components/Learn/Mental_App_Chat'
const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navigation />

        <Switch>

          {/* Swith Path for component */}
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/learn' component={Learn} exact />
          <Route path='/learn/mental_app' component={MentalAppMain} exact />
          <Route
            path='/learn/mental_app/information'
            component={MentalAppInfo}
            exact
          />
          <Route
            path='/learn/mental_app/resource_center'
            component={MentalAppResourceCenter}
            exact
          />
          <Route
          path = '/learn/mental_app/chat' 
          component ={MentalAppChat} 
          exact/>


          
          <Route path='/lab' component={Lab} exact />
          <Route path='/contact' component={Contact} exact />
          <Route path='/error404' component={Error404} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
