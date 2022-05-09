//preform logic -> make db call (WIP) -> return response to controller
const sensor = require("node-dht-sensor").promises;
const camera = require('./camera');
const config = require('./config');
const KSUID = require('ksuid')

const service = {
    getTemp: async () => {
        const res = await sensor.read(11, 4);
        return {
            temp: res.temperature.toFixed(2),
            uuid: new Date().toISOString(),
            machineID: config.MACHINE_ID
        };
    },
    getImage: async () => {
        const timestamp = Date.now();
        const uuid = await KSUID.random();
        camera.config.output = `${__dirname}/public/images/${timestamp}.jpg`;
        await camera.snap();
        return {
            imageUrl:camera.config.output,
            timestamp: timestamp,
            machineID:config.MACHINE_ID,
            uuid: uuid.string
        }
    }
};

module.exports = {
    service,
};