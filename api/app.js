//server - file we start
//app->router->controller->service->db

const config = require('./config');
const express = require("express");
const path = require("path");
const routes = require("./router");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

routes(app);

const PORT = config.EXPRESS_PORT || 3000;

const server = app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`));

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
});
