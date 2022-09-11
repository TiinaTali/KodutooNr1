const express = require("express");
const { get } = require("http");
const app = express();
let port = process.env.PORT || 3000;

app.get('/getRequest:name', function(req,res){
    res.send('Tsau, '+ req.params.name)
  })
  
  app.listen(port, () => {
    console.log('Example app is listening on port http://localhost:${port}');
  })