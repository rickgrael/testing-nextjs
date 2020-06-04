const mosca= require('mosca');
var settings={
    port:3333
};
var authenticate = function(client, username, password, callback) {
    var authorized = (username === 'MasterControl' && password.toString() === 'MasterKey');
    if (authorized) client.user = username;
    else{
        console.log('nao foi')
    }
    callback(null, authorized);
  }
  var server= new mosca.Server(settings);
  server.on('ready',setup);
  function setup() {
    server.authenticate = authenticate;
  }
module.exports = async function brokerInstance(req,res){
    res.send("alive")

}
