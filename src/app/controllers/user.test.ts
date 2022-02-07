import supertest from "supertest";
import { start as startApp } from "../start";
import { BASE_USER_ROUTE_PATH } from "../routers";
import { tokenService } from "../services";
import { UserModel } from "../models";
import { randomUUID } from "crypto";

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
  it("get groups", async () => {
    const res = await supertest(app).get(`${BASE_USER_ROUTE_PATH}/`);

    expect(res.statusCode).toEqual(200);
  });
  it("find a user by id", async () => {
    const res = await supertest(app)
      .get(`${BASE_USER_ROUTE_PATH}/${id}`)
      .set("Authorization", jwt);

    expect(res.statusCode).toEqual(200);
  });
  it("update a user by id", async () => {
    const res = await supertest(app)
      .put(`${BASE_USER_ROUTE_PATH}/${id}`)
      .send({ age: "3" })
      .set("Authorization", jwt);

    expect(res.statusCode).toEqual(200);
  });
  it("delete a user by id", async () => {
    const res = await supertest(app)
      .delete(`${BASE_USER_ROUTE_PATH}/${id}`)
      .set("Authorization", jwt);

    expect(res.statusCode).toEqual(200);
  });
  it("get a list of users", async () => {
    const res = await supertest(app)
      .get(`${BASE_USER_ROUTE_PATH}/list`)
      .set("Authorization", jwt)
      .query("?username=dima&limit=10");

    expect(res.statusCode).toEqual(200);
  });
  it("login a user", async () => {
    const res = await supertest(app)
      .post(`${BASE_USER_ROUTE_PATH}/login`)
      .send({ login: "dima" + id, password: "hello" });

    expect(res.statusCode).toEqual(200);
  });
});
