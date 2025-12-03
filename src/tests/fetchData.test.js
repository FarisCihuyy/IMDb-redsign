import { test, expect, vi, beforeEach } from "vitest";
import { fetchData } from "../services/fetchData.js";

beforeEach(() => {
  globalThis.localStorage = {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };
});

test("should return data when response is OK", async () => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ message: "success" }),
    })
  );

  const result = await fetchData("/movies");

  expect(result).toEqual({ message: "success" });
  expect(fetch).toHaveBeenCalledOnce();
});

test("should throw HTTP Error when status is not OK", async () => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      ok: false,
      status: 500,
      json: () => Promise.resolve({ error: "server error" }),
    })
  );

  await expect(fetchData("/broken-endpoint")).rejects.toThrow(
    "HTTP Error: 500"
  );
});

test("should throw error when fetch fails (network error)", async () => {
  globalThis.fetch = vi.fn(() => Promise.reject(new Error("Network down")));

  await expect(fetchData("/any")).rejects.toThrow("Network down");
});
