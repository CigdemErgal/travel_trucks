interface CamperImage {
  thumb: string;
  original: string;
}

export interface Camper {
  form: string;
  engine: string;
  transmission: string;
  id: string;
  name: string;
  price: number;
  location: string;
  gallery: CamperImage[];
}

export interface CampersResponse {
  items: Camper[];
}
export type CamperFilters = {
  location: string;
  form: string;
  engine: string;
  transmission: string;
};
