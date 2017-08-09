// var Menu = require('Menu');
// var Main = require('Main');
var Nav = require('./Nav.js');
var Menu = require('./Menu.js');
var React = require('react');
class Layout extends React.Component{
       render(){
         return(
               <div className="container">
                  
                        <div className="col-md-12">
                      		  <Nav />
                        </div>
                        <div className="">
                             <div style={{paddingRight:"0px"}} className="col-md-2">
                                 <Menu />
                             </div>
		                      <div style={{paddingLeft:"0px",paddingRight:"0px"}} className="col-md-10" >
		                          {this.props.children}
		                       </div>
		                </div>

               </div>

         )
     }
}
module.exports = Layout;