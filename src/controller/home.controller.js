class HomeController {
  static getCurrentTime(req, res) {
    res.send({ currentTime: new Date() });
  }
}

module.exports = HomeController;
