import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Splash from '../components/Splash';
import Adoption from '../components/Adoption';
import './Root.css';


export default class Root extends React.Component {
  renderRoutes() {
      return (
          <Router>
                  <Route 
                      exact 
                      path='/'
                      component={Splash} 
                  />
                  <Route 
                      exact 
                      path='/adopt'
                      component={Adoption} 
                  />
          </Router>
      );
  }

  render() {
    return (
        <div className="App">
            <Header />
            <main>
                {this.renderRoutes()}
            </main>
            <Footer />
        </div>
    );
  };
}

