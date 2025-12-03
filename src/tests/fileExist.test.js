import fs from "fs";
import { test, expect } from "vitest";

test("fetchData.js file should exist", () => {
  const fileExists = fs.existsSync("./src/services/fetchData.js");
  expect(fileExists).toBe(true);
});
