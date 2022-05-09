const {putDynamo} = require('./db.service');
const {uploadS3} = require('./s3.service');

module.exports = {putDynamo,uploadS3};