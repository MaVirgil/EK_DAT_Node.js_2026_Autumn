import { sanitizeXSS } from "./sanitizeXSS.js";

let plants;

export async function fetchAllPlants() {
  if (!plants) {
    const response = await fetch('https://www.plantsolve.com/api/v1/plants/index.json');
    plants = await response.json();
  }
  return plants;
}

const plantMap = new Map();

export async function fetchPlant(slug) {

  if (plantMap.get(slug)) {
    console.log('getting plant from map');
    return plantMap.get(slug);
  }

  const response = await fetch(`https://www.plantsolve.com/api/v1/plants/${slug}.json`);
  const plant = await response.json();

  plantMap.set(slug, plant);
  return plant;
}