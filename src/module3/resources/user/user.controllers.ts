import { UserModel, UserType } from "./user.model";
import { RequestHandler } from "express";

class UserController {
  static async getUserById(id: string): Promise<UserType | undefined> {
    const output = UserModel.findOne({ id });
    return output;
  }
  static async createUser(user: UserType): Promise<UserType> {
    const output = UserModel.add([user]);
    return output[0];
  }
  static async updateUser(
    id: string,
    user: Partial<UserType>
  ): Promise<UserType | undefined> {
    const output = UserModel.update([{ id, user }]);
    return output[0];
  }
  static async getAutoSuggestUsers(
    loginSubstring: string,
    limit: number
  ): Promise<Array<UserType>> {
    const output = UserModel.findMany({ login: loginSubstring });
    output.length = limit;
    return output;
  }
  static async removeUser(id: string): Promise<UserType | undefined> {
    let output = UserModel.update([{ id, user: { isDeleted: true } }])[0];
    return output;
  }
}

class UserRequestHandlers {
  static getUserRequestHandler: RequestHandler = (req, res) => {
    UserController.getUserById(req.params.id)
      .then(function (user) {
        res.status(200).json({ data: user });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
  static createUserRequestHandler: RequestHandler = async (req, res) => {
    UserController.createUser(req.body.user)
      .then(function (user) {
        res.status(201).json({ data: user });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
  static updateUserRequestHandler: RequestHandler = (req, res) => {
    UserController.updateUser(req.body.id, req.body.user)
      .then(function (user) {
        res.status(200).json({ data: user });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
  static removeUserRequestHandler: RequestHandler = (req, res) => {
    UserController.removeUser(req.params.id)
      .then(function (user) {
        res.status(200).json({ data: user });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
  static getAutoSuggestUserRequestHandler: RequestHandler = (req, res) => {
    const limit = parseInt(req.query.limit?.toString() || "10", 10);
    const loginSubstring = req.query.subStr?.toString() || "";

    UserController.getAutoSuggestUsers(loginSubstring, limit)
      .then(function (users) {
        res.status(200).json({ data: users });
      })
      .catch(function (error) {
        res.status(400).json({ data: error });
      });
  };
}

const requestHandlers = {
  getUserRequestHandler: UserRequestHandlers.getAutoSuggestUserRequestHandler,
  createUserRequestHandler: UserRequestHandlers.createUserRequestHandler,
  updateUserRequestHandler: UserRequestHandlers.updateUserRequestHandler,
  removeUserRequestHandler: UserRequestHandlers.removeUserRequestHandler,
  getAutoSuggestUserRequestHandler:
    UserRequestHandlers.getAutoSuggestUserRequestHandler,
};

export { requestHandlers };
