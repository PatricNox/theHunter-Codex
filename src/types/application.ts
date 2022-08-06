export interface Map {
  id: number;
  name: string;
  mediaUrl: string;
}

export interface Animal {
  id: number;
  name: string;
  trophy: string;
  class: number;
  scents: Scent[];
  maxDifficulty: number;
  maxWeight: string;
  ratings: AnimalRating;
  weapons: Weapon[];
}

export interface AnimalRating {
  id: number;
  bronze: string;
  silver: string;
  gold: string;
  diamond: string;
}

export interface Weapon {
  id: number;
  name: string;
  weaponNo: string;
  ammunition: Ammunition[];
}

export interface Ammunition {
  id: number;
  name: string;
  ammunitionNo: string;
}

export interface Scent {
  id: number;
  name: string;
}
