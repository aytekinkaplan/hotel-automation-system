const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const User = require("../models/User");

describe("User API", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create a new user", async () => {
    const res = await request(app).post("/api/users").send({
      username: "testuser",
      password: "testpass",
      email: "testuser@example.com",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("username", "testuser");
  });

  it("should get all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should get a user by ID", async () => {
    const user = new User({
      username: "testuser",
      password: "testpass",
      email: "testuser@example.com",
    });
    await user.save();

    const res = await request(app).get(`/api/users/${user._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("username", "testuser");
  });

  it("should update a user by ID", async () => {
    const user = new User({
      username: "testuser",
      password: "testpass",
      email: "testuser@example.com",
    });
    await user.save();

    const res = await request(app).put(`/api/users/${user._id}`).send({
      username: "updateduser",
      email: "updateduser@example.com",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("username", "updateduser");
    expect(res.body).toHaveProperty("email", "updateduser@example.com");
  });

  it("should delete a user by ID", async () => {
    const user = new User({
      username: "testuser",
      password: "testpass",
      email: "testuser@example.com",
    });
    await user.save();

    const res = await request(app).delete(`/api/users/${user._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "User deleted successfully");
  });
});
