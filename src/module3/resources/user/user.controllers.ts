import { UserModel, UserType } from "./user.model";

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
    if (output.length > limit) {
      output.length = limit;
    }
    return output;
  }
  static async removeUser(id: string): Promise<UserType | undefined> {
    let output = UserModel.update([{ id, user: { isDeleted: true } }])[0];
    return output;
  }
}

export { UserController };
