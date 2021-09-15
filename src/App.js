import React, { Component } from 'react'
import './App.css';
import Menu from './component/Menu/Menu'
import routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
        <Router>
            <div>
                 <Menu />
                <div className="container">
            
                    <div className="row">
                        {this.showContextMenu(routes)}
                    </div>
            
                </div>
    
            </div>
        </Router>
    )   
  }
  showContextMenu=(routes)=>{
      var result = null;
        if(routes.length> 0){
            result = routes.map((route, index)=>{
                return (
                    <Route 
                     key = {index}
                     path ={route.path}
                     exact ={route.exact}
                     component = {route.main}
                    />
                )
            });
        }
      return <Switch>
          {result}
      </Switch>;
  }
}
