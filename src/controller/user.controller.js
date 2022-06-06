const userService = require("../services/user.service");
class UserController {
  static getAll(req, res) {
    userService
      .findAll()
      .then((response) => {
        if (response.error) {
          res.status(400).send(response.data);
        } else {
          res.status(200).send(response.data);
        }
      })
      .catch((err) => {
        res.status(500);
      });
  }
  static getById(req, res) {
    userService
      .findById(req.params.id)
      .then((response) => {
        if (response.error) {
          res.status(400).send(response.data);
        } else {
          res.status(200).send(response.data);
        }
      })
      .catch((err) => {
        res.status(500);
      });
  }
  static createUser(req, res) {
    userService
      .create(req.body)
      .then((response) => {
        if (response.error) {
          res.status(400).send(response.data);
        } else {
          res.status(200).send(response.data);
        }
      })
      .catch((err) => {
        res.status(500);
      });
  }
  static updateUser(req, res) {
    userService
      .update(req.params.id, req.body)
      .then((response) => {
        if (response.error) {
          res.status(400).send(response.data);
        } else {
          res.status(200).send(response.data);
        }
      })
      .catch((err) => {
        res.status(500);
      });
  }
  static deleteUser(req, res) {
    userService
      .delete(req.params.id)
      .then((response) => {
        if (response.error) {
          res.status(400).send(response.data);
        } else {
          res.status(200).send(response.data);
        }
      })
      .catch((err) => {
        res.status(500);
      });
  }
  static addUserMark(req, res) {
    userService
      .addSubjectMark(req.body)
      .then((response) => {
        if (response.error) {
          res.status(400).send(response.data);
        } else {
          res.status(200).send(response.data);
        }
      })
      .catch((err) => {
        res.status(500);
      });
  }
  static updateUserMark(req, res) {
    userService
      .updateSubjectMark(req.params.id, req.body)
      .then((response) => {
        if (response.error) {
          res.status(400).send(response.data);
        } else {
          res.status(200).send(response.data);
        }
      })
      .catch((err) => {
        res.status(500);
      });
  }
  static getUserMark(req, res) {
    userService
      .getUserMark(req.params.userId)
      .then((response) => {
        res.status(400).send(response);
      })
      .catch((err) => {
        res.status(500);
      });
  }
}

module.exports = UserController;
