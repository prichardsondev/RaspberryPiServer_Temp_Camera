
let AWS = require('../credentials');
const config = require('../../config');
const fs = require('fs/promises');
const path = require('path');

AWS.config.update({
  region: "us-east-1",
  endpoint: "https://s3.amazonaws.com"
});

const S3 = new AWS.S3();

const uploadS3 = async (filePath) => {
    //overkill for testing
    const newFile =  `${path.basename(filePath)}`;
    const pathToFile = path.resolve(filePath);
    const file = await fs.readFile(pathToFile);
    
    const params = {
        Bucket: config.S3_BUCKET,
        Key: `${config.CLIENT}/${newFile}`,
        Body: file
    };

    console.log(params)

    try {
        let data = await S3.upload(params).promise();
        console.log(data.Location);
        return data;
    } catch (err) {
        console.log('/services/s3.service', err);
    }
};

module.exports = { uploadS3 }