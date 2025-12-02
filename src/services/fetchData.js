const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDJhYTU0ZDE0ODNlYjcwMTQ0MzdkM2IwZTFhMDM0MCIsIm5iZiI6MTc2NDYwNDU2My42Niwic3ViIjoiNjkyZGJhOTMyMmU3YzY3YWIyMjg2NzU0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nDT1Qsd8RkY7ex-GJNCpQGjB5eQ-y689zu1yoQnEjws";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchData(endpoint, language = "en-US") {
  const url = `${BASE_URL}${endpoint}?language=${language}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("TMDB Popular Movies Error:", err.message);
    throw err;
  }
}

export { fetchData };
