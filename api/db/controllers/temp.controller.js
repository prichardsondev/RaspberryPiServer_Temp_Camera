const config = require('../../config');
let { Temp } = require('../models');
let {putDynamo} = require('../services');

const tempController = {
    putTemp: async (data) => {
        try {
            const temp = new Temp({
                client: config.CLIENT,
                machineid: config.MACHINE_ID,
                celsius: data.temp,
                uuid: data.uuid
            });
            putDynamo(temp);
        } catch (err) {
            console.log("controller putTemp...", err.message);
        }
    }
};

module.exports = {
    tempController,
};