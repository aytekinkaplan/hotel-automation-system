const request = require("supertest");
const app = require("../server");

describe("User API", () => {
  it("should register a new user", async () => {
    const res = await request(app).post("/api/users/register").send({
      username: "testuser",
      email: "testuser@example.com",
      password: "password123",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  });

  it("should login a user", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: "testuser@example.com",
      password: "password123",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  it("should return 404 for non-existent user", async () => {
    const res = await request(app).get("/api/users/999");
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe("User not found");
  });

  it("should update a user", async () => {
    const res = await request(app).put("/api/users/1").send({
      username: "updateduser",
      email: "updateduser@example.com",
      password: "password123",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User updated successfully");
  });

  it("should delete a user", async () => {
    const res = await request(app).delete("/api/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User deleted successfully");
  });

  it("should return 404 for non-existent user", async () => {
    const res = await request(app).delete("/api/users/999");
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe("User not found");
  });
});
