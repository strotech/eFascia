const aws = require('aws-sdk');
const axios = require('axios');
module.exports = async function(app){
  const { Parameters } =  await (new aws.SSM())
  .getParameters({
    Names: ["TELEGRAM_TOKEN","CHAT_CHANNEL_ID"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

//Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
console.log("hiya",Parameters);

const parameterFilter = (paramName)=>{
  return Parameters.filter(param=>param.Name.includes(paramName))[0].Value;
}

/**********************
 * Example get method *
 **********************/

app.get('/telegram/covid', async function(req, res) {
  const botReturn =  await axios.post(`https://api.telegram.org/bot${parameterFilter("TELEGRAM_TOKEN")}/sendMessage`, {
      "text": "I am telegram bot amplified",
      "chat_id": parameterFilter("CHAT_CHANNEL_ID")
  },{
      headers:{
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*"
      }
  })
  .then(response=>response.data)    
  .catch(error => {
      console.error('There was an error!', error);
  });
  console.log(botReturn);
  res.json({
      body: JSON.stringify(botReturn.result.text),
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }
  })
  // res.json({success: 'get call succeed!', url: req.url});
});

app.get('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/item', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/item', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/item', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

}
