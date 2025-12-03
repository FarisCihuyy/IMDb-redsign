import { test, expect, vi } from "vitest";

// Mock import.meta.env sebelum melakukan require()
vi.stubGlobal("import", {
  meta: {
    env: {
      VITE_TMDB_API_KEY: "dummy-key",
    },
  },
});

import { createRequire } from "module";
const require = createRequire(import.meta.url);

test("fetchData.js should load without syntax error", () => {
  expect(() => require("../services/fetchData")).not.toThrow();
});
