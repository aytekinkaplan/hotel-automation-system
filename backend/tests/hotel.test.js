const request = require("supertest");
const app = require("../server");

describe("Hotel API", () => {
  it("should list all hotels", async () => {
    const res = await request(app).get("/api/hotels");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(0); // Test database should be empty initially
  });

  it("should create a new hotel", async () => {
    const res = await request(app).post("/api/hotels").send({
      name: "Test Hotel",
      location: "Test Location",
      rooms: 10,
      price: 100,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("Hotel added successfully");
  });

  it("should update an existing hotel", async () => {
    const res = await request(app).put("/api/hotels/1").send({
      name: "Updated Test Hotel",
      location: "Updated Test Location",
      rooms: 20,
      price: 200,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hotel updated successfully");
  });

  it("should delete a hotel", async () => {
    const res = await request(app).delete("/api/hotels/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hotel deleted successfully");
  });

  it("should return 404 for non-existent hotel", async () => {
    const res = await request(app).get("/api/hotels/999");
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe("Hotel not found");
  });
});
