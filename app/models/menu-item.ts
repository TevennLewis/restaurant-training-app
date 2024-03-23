import { StaticImageData } from "next/image";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  allergies: string[];
  img: string | StaticImageData;
}
