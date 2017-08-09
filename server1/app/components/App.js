var React = require('react');

import {BrowserRouter as Router,Route,Switch,Ridirect,hashHistory,Redirect} from 'react-router-dom';







var Layout = require('app/components/Layout.js');
var Home = require('app/components/Home.js');
var EventLog  = require('app/components/pages/eventlog/EventLog.js')


 class App extends React.Component{

// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
//require('style!css!sass!./css/style.scss');
// $(document).ready(() => $(document).foundation());
 
     render(){
        return(
            <Router history={hashHistory}>
                  <Layout>
                   <Switch>

                      <Route  exact   path="/" component={Home}/>
                     
                      <Route  path="/eventLog" component={EventLog}/>
                      



                      <Route render={function(){
                          return <p> not found</p>
                      }
                    } />
                 </Switch>
               </Layout>
           </Router>
     
    )
  }
}
module.exports = App;