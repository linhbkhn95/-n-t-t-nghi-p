import React from 'react';
import {NavLink,Link} from 'react-router-dom';
 class Menu extends React.Component {
	render() {
		return (
			<div className="list-group">
			  
			 
			  <Link to="/" className="list-group-item">TRANG CHỦ</Link>
			  <Link to="#" className="list-group-item">BẢNG HOẠT ĐỘNG WEBSITES</Link>
			  <Link to="/eventLog" className="list-group-item">SỰ KIỆN LOGS</Link>
			  <Link to="#" className="list-group-item">CẢNH BÁO</Link>
			  <Link to="#" className="list-group-item">QUẢN LÝ SENSORS</Link>
		   </div>
		);
	}
}
 module.exports = Menu;