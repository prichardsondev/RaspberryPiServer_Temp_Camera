## NOTE: !!!!!
### .../image endpoint takes a pic with your pi camera and uploads to S3 bucket. Make sure you 
### know the privacy status of your bucket

## Raspberry Pi Service

### Endpoints
- /
  ```
    landing page
  ```
- /health
  ```
  {
    "uptime": 990.160930002,
    "message": "Ok",
    "timestamp": 1646572392333
  }
  ```
- /temp
  ```
  {
    "temp": "17.00",
    "uuid": "260s6sYl9KOHm1MggmpuZ3dsV5v",
    "machineID": "02"
  }
  ```
- /image
  ```
  {
    "imageUrl": "/home/pi/server/public/images/1646572466933.jpg",
    "timestamp": 1646572466933,
    "machineID": "02",
    "uuid": "260tja9Qw1O7OI2v1iL48aU7wey"
  }
  ```


### config.js
- Create config.js in /api/config.js if running manually
- Replace CLIENT,MACHINEID,PROFILE [your aws credential profile'default' if you configured without profile]
```
module.exports = {
    EXPRESS_PORT:"3000",
    CLIENT:"PRICHARDSON",
    MACHINE_ID:"01",
    TABLE_NAME:"devtraining-pi-service",
    S3_BUCKET:"devtraining-pi-service",
    PROFILE:"default"
}
```

### Remove existing app from PM2 startup if not already done
- pm2 status
- pm2 stop all
- pm2 delete all
- pm2 save --force

### Testing
- dev mode - restart server on startup
  - nodemon app.js

### Startup - when done testing
- pm2 start app.js

### Endpoints should work from localhost or your dataplicity url
- serverIP/temp
- serverIP/health
- serverIP/image
- dataplicityurl/temp
- dataplicityurl/health
- dataplicityurl/image
