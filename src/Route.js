export class Route {
  constructor(app) {
    this.app = app;
  }

  route() {
    const app = this.app;
    app.get("/", function (req, res) {
      res.render("index.html", {});
    });
    app.get("/my", function (req, res) {
      res.render("my.html", {});
    });
    app.get("/history", function (req, res) {
      res.render("history.html", {});
    });
    app.get("/setting", function (req, res) {
      res.render("setting.html", {});
    });
    app.get("/request", function (req, res) {
      res.render("request.html", {});
    });

    //1. enetry point
    app.listen(1118, function () {
      console.log("CAD listen on *:1118");
    });
  }
}
