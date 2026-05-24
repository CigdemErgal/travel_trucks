interface CamperImage {
  thumb: string;
  original: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  location: string;
  gallery: CamperImage[];
}

export interface CampersResponse {
  items: Camper[];
}
