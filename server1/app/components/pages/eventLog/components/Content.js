import React, { Component } from 'react';

export default class Content extends Component {
	constructor(props){
		super(props);
		this.state ={
			list:[
				{
					timelocal:"3-8-2017 22:25:21",host_name:"sis.hust.edu.vn",brower:"IE",os:"win",bytes_tx:"681",referer:".",country:"local",country_code:"Lan",remote_host:"185.22.12.2",remote_user:".",method:"GET",query:".",url:"/timetable.aspx",http_version:"1.0",status_code:"200",time:"3-8-2017 22:25:21"
				},
				{
					timelocal:"3-8-2017 22:25:21",host_name:"sis.hust.edu.vn",brower:"IE",os:"win",bytes_tx:"681",referer:".",country:"local",country_code:"Lan",remote_host:"185.22.12.2",remote_user:".",method:"GET",query:".",url:"/timetable.aspx",http_version:"1.0",status_code:"200",time:"3-8-2017 22:25:21"
				},
				{
					timelocal:"3-8-2017 22:25:21",host_name:"sis.hust.edu.vn",brower:"IE",os:"win",bytes_tx:"681",referer:".",country:"local",country_code:"Lan",remote_host:"185.22.12.2",remote_user:".",method:"GET",query:".",url:"/timetable.aspx",http_version:"1.0",status_code:"200",time:"3-8-2017 22:25:21"
				},
				{
					timelocal:"3-8-2017 22:25:21",host_name:"sis.hust.edu.vn",brower:"IE",os:"win",bytes_tx:"681",referer:".",country:"local",country_code:"Lan",remote_host:"185.22.12.2",remote_user:".",method:"GET",query:".",url:"/timetable.aspx",http_version:"1.0",status_code:"200",time:"3-8-2017 22:25:21"
				},
				{
					timelocal:"3-8-2017 22:25:21",host_name:"sis.hust.edu.vn",brower:"IE",os:"win",bytes_tx:"681",referer:".",country:"local",country_code:"Lan",remote_host:"185.22.12.2",remote_user:".",method:"GET",query:".",url:"/timetable.aspx",http_version:"1.0",status_code:"200",time:"3-8-2017 22:25:21"
				}
				


			]
		}

	}
	 componentDidMount(){
	 	io.socket.on('hello', function (data) {
	 	  console.log(data);
		  console.log('Socket `' + data.id + '` joined the party!');
		});
		io.socket.on('ballo', function (data) {
	 	  console.log(data);
		  console.log('Socket `' + data.id + '` joined the party!');
		});
	 }
	 test(){
	 	var socket = new io.sails.connect("http://localhost:1339");
	 	socket.get('http://localhost:1339/log/getAll', function gotResponse(data, jwRes) {
		    console.log('Server responded with status code ' + jwRes.statusCode + ' and data: ', data);
		  });
	 	socket.on('ballo', function (data) {
	 	  console.log(data);
		  console.log('Socket `' + data.id + '` joined the party!');
		});

		


		var socket2 = new io.sails.connect("http://localhost:1337");
	 	socket2.get('http://localhost:1337/log/getAll', function gotResponse(data, jwRes) {
		    console.log('Server responded with status code ' + jwRes.statusCode + ' and data: ', data);
		  });
	 	socket2.on('hello', function (data) {
	 	  console.log(data);
		  console.log('Socket `' + data.id + '` joined the party!');
		});
		socket2.get('/log',function(data,jwRes){
            console.log(data);
		})

		socket2.post('/log/create',{host_name:'aaa',os:'linux'},function (resData, jwres){
			console.log(resData);
		})
        socket2.on('log',function(event){
        	console.log(event);
			if(event.verb==='created'){
				console.log(event);
			}
     //       switch(event.verb){
    	// 	 'created':
                 
     //               break;
			  // default:
			  //     console.warn('Unrecognized socket event (`%s`) from server:',event.verb, event);

     //         }
		});

	 }
	 rv(){
		var that=this;
		  var socket=new io.connect('http://localhost:1337/');

		 socket.on('connect', function(s) {
			console.log("Connected đến verver port 1337");

         
			// socket.on('chat', function (data){
			//   console.log(data);
			//   socket.emit('getname');
			//   socket.on('getname',(data)=>{
			//       console.log(data);

			//   })
			socket.emit("sendlog");
			socket.on('sendlog',(data)=>{
				console.log('nhan log tu server 1337');
             	console.log(data);
                that.state.list.push(data);
              	console.log(that.state);
                 that.setState({list:that.state.list});
			 });
		})
		  var socket2=new io.connect('http://localhost:1339/');

		 socket2.on('connect', function(s) {
			console.log("Connected đến verver port 1339");
		     socket2.emit("sendlog");
             socket2.on('sendlog',(data)=>{
             	console.log('nhan log tu server 1339');
             	console.log(data);
             	console.log(that.state);
             	that.state.list.push(data);
             	console.log(that.state);
                 that.setState({list:that.state.list});
			})
			
			
		})


	}
	render() {
		return (
			<div>
			     <button onClick={this.test.bind(this)}  className="btn btn-primary" >Recevice log</button>
				 {	this.state.list.map((item,index)=>{
				 	 return(

                          <div key={index}  className="custom-alert alert alert-success col-md-12" role="alert">
                             <div style={{fontSize:"9px",paddingTop:"12px"}} className="col-md-2">
                             		<span className="glyphicon glyphicon-time" style={{marginRight:"2px"}}></span>{item.timelocal}
                             </div>
                             <div style={{fontSize:"12px"}} className="col-md-10 data-view">
                             	 <div className="data-recevice">
                             	 			<p style={{fontSize:"9px",marginBottom:"0px"}}>hssssssá đasd d d d da a dsd ada  da da d ad ad d dd d d d d d dddd dddđ dddd dđ d d d d a da sdasda sssss</p>

                             	 </div>
                             	  <div className="list-property">
                             	 		<h6><span className="label label-default">host_name={item.host_name}</span></h6>
                             	 		<h6><span className="label label-default">brower={item.brower}</span></h6>	
                             	 		<h6><span className="label label-default">os={item.os}</span></h6>	
                             	 		<h6><span className="label label-default">bytes_tx={item.bytes_tx}</span></h6>	
                             	 		<h6><span className="label label-default">referer={item.host_name}</span></h6>	
                             	 		<h6><span className="label label-default">country={item.country}</span></h6>	
                             	 		<h6><span className="label label-default">country_code={item.country_code}</span></h6>	
                             	 		<h6><span className="label label-default">remote_host={item.remote_host}</span></h6>	
                             	 		<h6><span className="label label-default">remote_user={item.remote_user}</span></h6>	
                             	 		<h6><span className="label label-default">method={item.method}</span></h6>	
                             	 		<h6><span className="label label-default">query={item.query}</span></h6>	
                             	 		<h6><span className="label label-default">url={item.url}</span></h6>	
                             	 		<h6><span className="label label-default">http_version={item.http_version}</span></h6>	
                             	 		<h6><span className="label label-default">status_code={item.status_code}</span></h6>		
                             	 		<h6><span className="label label-default">time={item.time}</span></h6>		
                             	 
                             	 </div>
                             </div>

                          </div>
				 	 	)	

					 })
				}

		</div>
		);
	}
}
