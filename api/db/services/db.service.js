
var AWS = require('../credentials');
const config = require('../../config');


AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
});

let documentClient = new AWS.DynamoDB.DocumentClient();

const putDynamo = async (data) => {
  try {
    const params = {
      TableName: config.TABLE_NAME,
      Item: data.toItem()
    };
    await documentClient.put(params).promise();
  } catch (err) {
    console.log(`db.service: ${err}`);
  }
};

  module.exports = {putDynamo};