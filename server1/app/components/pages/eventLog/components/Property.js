import React, { Component } from 'react';

export default class Property extends Component {
	render() {
		return (
			<div>
					<ul className="list-group">
                      <li style={{fontSize:"15px", fontWeight:"bold"}} className="list-group-item ">
					    
					    Thuộc tính
					  </li>

					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Status
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Method
					  </li>
					  <li className="list-group-item">
					    <span className="badge badge-primary">14</span>
					   Path
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Query
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Remote_host
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Referer
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					    Brower
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Os
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Url
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Country
					  </li>
					  <li className="list-group-item">
					    <span className="badge">14</span>
					   Hostname
					  </li>
					</ul>

			</div>
		);
	}
}
