import { vi } from "vitest";

vi.stubGlobal("import", {
  meta: {
    env: {
      VITE_TMDB_API_KEY: "dummy-test-key",
      VITE_TMDB_BASE_URL: "https://api.example.com",
    },
  },
});

// Mock fetch default (bisa di-override di setiap test)
globalThis.fetch = vi.fn();
