import { useState, useEffect } from "react";
import { getScreenshots } from "../services/Screenshots";

function useScreenshots() {
  const [images, setImages] = useState([]);

  async function getResults(id) {
    const screenshots = await getScreenshots(id);
    setImages(screenshots);
  }

  return { getResults, images };
}

export { useScreenshots };
