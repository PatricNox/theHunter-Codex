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
  callers: Caller[];
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
  classes: Animal["class"][];
  name: string;
  weaponNo: string;
  ammunition: Ammunition[];
}

export interface Ammunition {
  id: number;
  classes: Animal["class"][];
  name: string;
  ammunitionNo: string;
}

export interface Caller {
  id: number;
  name: string;
  animals: Animal["id"][];
}
