const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Hotel = require("../models/Hotel");

describe("Hotel API", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create a new hotel", async () => {
    const res = await request(app)
      .post("/api/hotels")
      .send({
        name: "Hotel Test",
        address: "123 Test St",
        rooms: 10,
        stars: 4,
        amenities: ["WiFi", "Pool"],
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("name", "Hotel Test");
  });

  it("should get all hotels", async () => {
    const res = await request(app).get("/api/hotels");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should get a hotel by ID", async () => {
    const hotel = new Hotel({
      name: "Hotel Test",
      address: "123 Test St",
      rooms: 10,
      stars: 4,
      amenities: ["WiFi", "Pool"],
    });
    await hotel.save();

    const res = await request(app).get(`/api/hotels/${hotel._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name", "Hotel Test");
  });

  it("should update a hotel by ID", async () => {
    const hotel = new Hotel({
      name: "Hotel Test",
      address: "123 Test St",
      rooms: 10,
      stars: 4,
      amenities: ["WiFi", "Pool"],
    });
    await hotel.save();

    const res = await request(app).put(`/api/hotels/${hotel._id}`).send({
      name: "Updated Hotel Test",
      rooms: 20,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name", "Updated Hotel Test");
    expect(res.body).toHaveProperty("rooms", 20);
  });

  it("should delete a hotel by ID", async () => {
    const hotel = new Hotel({
      name: "Hotel Test",
      address: "123 Test St",
      rooms: 10,
      stars: 4,
      amenities: ["WiFi", "Pool"],
    });
    await hotel.save();

    const res = await request(app).delete(`/api/hotels/${hotel._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Hotel deleted successfully");
  });
});
