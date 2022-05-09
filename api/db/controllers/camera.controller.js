const config = require('../../config');
let { Camera } = require('../models');
let {putDynamo, uploadS3} = require('../services');
const KSUID = require('ksuid');

const cameraController = {
    putImage: async (data) => {
        try {
            //not my proudest moment but works -)
            console.log(data);
            let s3data = await uploadS3(data.imageUrl);

            const camera = new Camera({
                client: config.CLIENT,
                machineid: config.MACHINE_ID,
                address: s3data.Location,
                uuid: data.uuid
            });

            await putDynamo(camera);
        } catch (err) {
            console.log("controller putImage...", err.message);
        }
    }
};

module.exports = {
    cameraController,
};