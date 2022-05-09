//call service -> return response
const { service } = require("./service");
const {tempController, cameraController} = require('./db/controllers');

const controller = {
  getHome: (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  },
  getHealth: (req, res) => {
    const data = {
      uptime: process.uptime(),
      message: 'Ok',
      timestamp: Date.now()
    }
    res.status(200).send(data);
  },
  getTemp: async (req, res) => {
    try {
      let temp = await service.getTemp();
      tempController.putTemp(temp);
      res.send(temp);
    } catch (err) {
      console.log("controller getTemp...", err.message);
      res.sendStatus(500);
    }
  },
  getImage: async (req, res) => {
    try {
      let imageUrl = await service.getImage();
      await cameraController.putImage(imageUrl);
      res.send(imageUrl);
    } catch (err) {
      console.log("controller getImage...", err.message);
      res.sendStatus(500);
    }
  }
};

module.exports = {
  controller,
};