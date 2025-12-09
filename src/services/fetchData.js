const BASE_URL = 'https://api.themoviedb.org/3';

const memoryCache = new Map();

const CACHE_TTL = 5 * 60 * 1000;

async function fetchData(endpoint, language = 'en-US') {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  console.log(endpoint);

  if (!API_KEY) {
    throw new Error('API Key tidak boleh kosong');
  }

  const url = `${BASE_URL}${endpoint}?language=${language}`;
  const cacheKey = `${endpoint}_${language}`;

  if (memoryCache.has(cacheKey)) {
    const { timestamp, data } = memoryCache.get(cacheKey);
    const isValid = Date.now() - timestamp < CACHE_TTL;

    if (isValid) {
      console.log(`✅ Load from MEMORY CACHE: ${cacheKey}`);
      return data;
    }
  }

  const localData = localStorage.getItem(cacheKey);
  if (localData) {
    const parsed = JSON.parse(localData);
    const isValid = Date.now() - parsed.timestamp < CACHE_TTL;

    if (isValid) {
      console.log(`🔵 Load from LOCAL STORAGE CACHE: ${cacheKey}`);

      memoryCache.set(cacheKey, {
        data: parsed.data,
        timestamp: parsed.timestamp,
      });

      return parsed.data;
    }
  }

  console.log(`🌐 Fetching from API: ${cacheKey}`);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

    const data = await res.json();

    memoryCache.set(cacheKey, {
      data,
      timestamp: Date.now(),
    });

    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );

    return data;
  } catch (err) {
    console.error('TMDB Error:', err.message);
    throw err;
  }
}

export { fetchData };
