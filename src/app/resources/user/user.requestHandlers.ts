import { RequestHandler } from "express";
import { UserController } from "./user.controllers";

class UserRequestHandlers {
  static getUser: RequestHandler = (req, res) => {
    UserController.getUserById(req.params.id)
      .then(function (user) {
        res.status(200).json({ data: user });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
  static createUser: RequestHandler = async (req, res) => {
    UserController.createUser(req.body.data)
      .then(function (user) {
        res.status(201).json({ data: user });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
  static updateUser: RequestHandler = (req, res) => {
    UserController.updateUser(req.body.data.id, req.body.data.user)
      .then(function (user) {
        res.status(200).json({ data: user });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
  static removeUser: RequestHandler = (req, res) => {
    UserController.removeUser(req.params.id)
      .then(function (user) {
        res.status(200).json({ data: user });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
  static getAutoSuggestUsers: RequestHandler = (req, res) => {
    const limit = parseInt(req.query.limit?.toString() || "10", 10);
    const loginSubstring = req.query.login?.toString() || "";

    UserController.getAutoSuggestUsers(loginSubstring, limit)
      .then(function (users) {
        res.status(200).json({ data: users });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
}

export { UserRequestHandlers };
