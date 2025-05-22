const request = require("supertest");
const { app, server } = require("../index");
const { describe, it, expect, afterAll } = require("@jest/globals");

describe("GET /", () => {
  it("should respond status 200 with Hello World!", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World!");
  });

  afterAll((done) => {
    server.close(done);
  });
});
