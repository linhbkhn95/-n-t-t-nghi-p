import React from 'react';

 class Nav extends React.Component {
	render() {
		return (
			  <nav style={{marginBottom:"2px",backgroundColor: "white"}} className="navbar navbar-inverse navbar-fixed-to">

				        <div className="container-fluid">
						        <div className="navbar-header">
							         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-controls="navbar">
							           <span className="sr-only">Toggle navigation</span>
							           <span className="icon-bar"></span>
							           <span className="icon-bar"></span>
							           <span className="icon-bar"></span>
							         </button>
						         <a className="navbar-brand" href="#">WebAsistaint</a>
						        </div>
						        <div id="navbar1" className="navbar-collapse collapse">
							         <ul className="nav navbar-nav navbar-right">

							            <li><input style={{marginTop:"11px",fontSize:"12px",padding:"5px"}} type="button" value="Đăng nhập" className="btn btn-success" /></li>
							         </ul>

						       </div>
				       </div>

         </nav>
		);
	}
}
module.exports = Nav;