const request = require("supertest");
const app = require("../index");
const { describe, it, expect } = require("@jest/globals");

describe("GET /", () => {
  it("should respond status 200 with Hello World!", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
