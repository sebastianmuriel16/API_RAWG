const API_KEY = "35cb6672bc84439a85813b1967cd36dc";
const BASE_URL = "https://api.rawg.io/api/games";

async function getScreenshots(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/${id}/screenshots?key=${API_KEY}`
    );
    const results = await response.json();
    const screenshots = results.results;
    return screenshots;
  } catch (error) {
    console.log(error);
  }
}

export { getScreenshots };
