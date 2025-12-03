import { test, expect, vi, beforeEach } from "vitest";
import { fetchData } from "../services/fetchData";

beforeEach(() => {
  // Mock environment (HARUS sama dengan fetchData.js)
  vi.stubEnv("VITE_TMDB_API_KEY", "dummy_key");

  // Mock localStorage agar tidak error
  globalThis.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };

  // Mock fetch menggunakan VI, bukan JEST
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ results: [1, 2, 3] }),
    })
  );
});

test("should return valid JSON object", async () => {
  const data = await fetchData("/movie/popular");

  expect(data).toHaveProperty("results");
  expect(Array.isArray(data.results)).toBe(true);
});
