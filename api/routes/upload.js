const controller = require("../controllers/uploadController");

module.exports=(app) => {
  app.post("/upload", controller.upload);
  app.get("/files", controller.getListFiles);
  app.get("/files/:name", controller.download);
};