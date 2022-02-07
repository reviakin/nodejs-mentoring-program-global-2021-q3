import supertest from "supertest";
import { start as startApp } from "../start";
import { BASE_GROUP_ROUTE_PATH } from "../routers";
import { tokenService } from "../services";
import { GroupModel, UserModel } from "../models";
import { randomUUID } from "crypto";
import { permissions } from "../validators/group";

describe("user router", () => {
  let token;
  let app = undefined as unknown;
  let jwt = "";
  let id = "";

  beforeEach(async () => {
    jest.resetModules();
    app = await startApp();
    id = randomUUID();
    const user = await UserModel.create({
      login: "dima" + id,
      password: "hello",
      age: 27,
      id,
    });

    token = tokenService.makeToken(user);
    jwt = `Bearer ${token}`;
  });
  it("create a group", async () => {
    const res = await supertest(app)
      .post(`${BASE_GROUP_ROUTE_PATH}/`)
      .set("Authorization", jwt)
      .send({ login: "group", permissions: Object.values(permissions) });

    expect(res.statusCode).toEqual(201);
  });
  it("find a group by id", async () => {
    const group = await GroupModel.create({
      name: "dima" + id,
      permissions: [],
    });
    const res = await supertest(app)
      .get(`${BASE_GROUP_ROUTE_PATH}/${group.id}`)
      .set("Authorization", jwt);

    expect(res.statusCode).toEqual(200);
  });
  it("update a group by id", async () => {
    const group = await GroupModel.create({
      name: "update a group by id" + id,
      permissions: [],
    });
    const res = await supertest(app)
      .put(`${BASE_GROUP_ROUTE_PATH}/${group.id}`)
      .send({ name: "test-name" + id })
      .set("Authorization", jwt);

    expect(res.statusCode).toEqual(200);
  });
  it("delete a user by id", async () => {
    const group = await GroupModel.create({
      name: "delete a user by id" + id,
      permissions: [],
    });

    const res = await supertest(app)
      .delete(`${BASE_GROUP_ROUTE_PATH}/${group.id}`)
      .set("Authorization", jwt);

    expect(res.statusCode).toEqual(200);
  });
  it("get a list of groups", async () => {
    const res = await supertest(app)
      .get(BASE_GROUP_ROUTE_PATH)
      .set("Authorization", jwt);

    expect(res.statusCode).toEqual(200);
  });
  it("add a user to a group", async () => {
    const group = await GroupModel.create({
      name: "add a user to a group" + id,
      permissions: [],
    });
    const res = await supertest(app)
      .post(`${BASE_GROUP_ROUTE_PATH}/add_users/${group.id}`)
      .send({ userIds: [id] });

    expect(res.statusCode).toEqual(200);
  });
});
