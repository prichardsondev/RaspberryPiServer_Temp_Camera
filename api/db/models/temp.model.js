class Temp {
    constructor({ client, machineid, celsius, uuid }) {
      this.client = client;
      this.machineid = machineid;
      this.celsius = celsius;
      this.uuid = uuid
    }
  
    key() {
      return {
        PK: `CLIENT#${this.client}`,
        SK: `MACHINEID#${this.machineid}#TEMP#${this.uuid}`,
      };
    }
  
    toItem() {
      return {
        ...this.key(),
        Type: "Temp",
        Celsius: this.celsius,
        uuid:this.uuid
      };
    }
  }

  
  module.exports = { Temp };