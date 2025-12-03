import { fetchData } from "../services/fetchData";
import { test, expect, vi, beforeEach } from "vitest";

beforeEach(() => {
  // Mock localStorage agar tidak error di Node
  globalThis.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };

  // Mock fetch agar tidak dipanggil, harusnya tidak tersentuh
  globalThis.fetch = vi.fn();
});

test("should throw error when API Key is empty", async () => {
  // Mock environment sesuai dengan fetchData.js
  vi.stubEnv("VITE_TMDB_API_KEY", "");

  await expect(fetchData("/movie/popular")).rejects.toThrow(
    "API Key tidak boleh kosong"
  );

  // fetch TIDAK BOLEH dipanggil
  expect(globalThis.fetch).not.toHaveBeenCalled();
});
