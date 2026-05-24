import type { Camper, CampersResponse } from "../types/camper";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export async function fetchCampers(): Promise<Camper[]> {
  const response = await fetch(BASE_URL);
  const data: CampersResponse = await response.json();
  return data.items;
}
export async function fetchCamperById(id: string): Promise<Camper> {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data: Camper = await response.json();
  return data;
}
