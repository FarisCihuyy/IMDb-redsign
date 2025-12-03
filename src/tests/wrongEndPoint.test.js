import { test, expect, vi } from "vitest";
import { fetchData } from "../services/fetchData.js";

test("should throw error if endpoint not found", async () => {
  // Mock env supaya API key tidak error
  vi.stubEnv("VITE_TMDB_API_KEY", "dummy_key");

  // Mock localStorage agar tidak error lebih dulu
  globalThis.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };

  // Mock fetch mengembalikan 404
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve({}),
    })
  );

  // Sekarang fetchData akan masuk ke blok HTTP Error 404
  await expect(fetchData("/wrong/endpoint")).rejects.toThrow("HTTP Error: 404");
});
