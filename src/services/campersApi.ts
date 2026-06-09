import axios from "axios";
import type { Camper, CamperFilters, CampersResponse } from "../types/camper";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export async function fetchCampers(filters?: CamperFilters): Promise<Camper[]> {
  const params = {
    location: filters?.location || undefined,
    form: filters?.form || undefined,
    engine: filters?.engine || undefined,
    transmission: filters?.transmission || undefined,
  };

  try {
    const response = await api.get<CampersResponse>("/campers", { params });
    return response.data.items;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return [];
    }
    throw error;
  }
}

export async function fetchCamperById(id: string): Promise<Camper> {
  const response = await api.get<Camper>(`/campers/${id}`);
  return response.data;
}
