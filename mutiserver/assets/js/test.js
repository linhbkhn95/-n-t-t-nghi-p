io.sails.url = 'http://localhost:1339';
var newSailsSocket = io.sails.connect();
newSailsSocket.on('connect',function(){
  console.log('hêll');
})
