import { IUsers, UserType } from "./user.schema";

class Model {
  findMany(filterInput: Partial<UserType>): Array<UserType> {
    const output: Array<UserType> = [];
    if (filterInput && typeof filterInput === "object") {
      const filterKeys = Object.keys(filterInput) as Array<
        keyof typeof filterInput
      >;
      if (filterKeys.length) {
        output.push(
          ...Object.values(this.users).filter(function (user) {
            return filterKeys.every(function (filterKey) {
              const isEqual = user[filterKey] === filterInput[filterKey];
              return isEqual;
            });
          })
        );
      }
    }
    return output;
  }
  findOne(filterInput: Partial<UserType>): UserType | undefined {
    let output;
    if (filterInput && typeof filterInput === "object") {
      const filterKeys = Object.keys(filterInput) as Array<
        keyof typeof filterInput
      >;
      if (filterKeys.length) {
        output = Object.values(this.users).find(function (user) {
          return filterKeys.every(function (filterKey) {
            const isEqual = user[filterKey] === filterInput[filterKey];
            return isEqual;
          });
        });
      }
    }
    return output;
  }
  add(users: Array<UserType>): Array<UserType> {
    const output: Array<UserType> = [];
    users.forEach((user) => {
      const { id = String(Math.random() * 10 ** 10), isDeleted = false } = user;
      this.users[id] = { ...user, id, isDeleted };
      output.push(this.users[id]);
    });
    return output;
  }
  update(
    input: Array<{ id: string; user: Partial<UserType> }>
  ): Array<UserType | undefined> {
    const output: Array<UserType | undefined> = [];
    input.forEach(({ id, user }) => {
      let userItem;

      if (id in this.users) {
        const oldUserRecord = this.users[id];
        const newUserRecord = { ...oldUserRecord, ...user };

        if ("id" in user && user["id"] !== id) {
          this.remove(id);
        }

        this.users[newUserRecord.id] = newUserRecord;

        userItem = newUserRecord;
      }

      output.push(userItem);
    });
    return output;
  }
  remove(id: string): UserType | undefined {
    let output;
    if (id in this.users) {
      output = this.users[id];
      delete this.users[id];
    }
    return output;
  }
  private users: IUsers;
  constructor(users: IUsers = {}) {
    this.users = users;
  }
}

function createUserModel(users?: IUsers) {
  return new Model(users);
}
const UserModel = createUserModel();

export { UserModel, createUserModel, UserType };
