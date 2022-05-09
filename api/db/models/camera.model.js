class Camera {
    constructor({ client, machineid, address, uuid }) {
      this.client = client;
      this.machineid = machineid;
      this.address = address;
      this.uuid = uuid
    }
  
    key() {
      return {
        PK: `CLIENT#${this.client}`,
        SK: `MACHINEID#${this.machineid}#CAMERA#${this.uuid}`,
      };
    }
  
    toItem() {
      return {
        ...this.key(),
        Type: "Camera",
        Address: this.address,
        uuid:this.uuid
      };
    }
  }

  
  module.exports = { Camera };