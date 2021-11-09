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
  static getUserRequestHandler: RequestHandler = (req, res, next) => {
    const userId = req.params.id;
    res.send(UserController.getUserById(userId));
  };
  static createUserRequestHandler: RequestHandler = (req, res, next) => {
    const user = req.body.user;
    res.send(UserController.createUser(user));
  };
  static updateUserRequestHandler: RequestHandler = (req, res, next) => {
    const user = req.body.user;
    const userId = req.body.id;
    res.send(UserController.updateUser(userId, user));
  };
  static removeUserRequestHandler: RequestHandler = (req, res, next) => {
    const userId = req.params.id;
    res.send(UserController.removeUser(userId));
  };
  static getAutoSuggestUserRequestHandler: RequestHandler = (
    req,
    res,
    next
  ) => {
    const limit = parseInt(req.query.limit?.toString() || "10", 10);
    const loginSubstring = req.query.subStr?.toString() || "";

    res.send(UserController.getAutoSuggestUsers(loginSubstring, limit));
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
