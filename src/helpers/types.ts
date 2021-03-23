export type Monster = {
  id: number;
  url: string;
  bestiary_slug: string;
  com2us_id: number;
  family_id: number;
  name: string;
  image_filename: string;
  element: string;
  archetype: string;
  base_stars: number;
  natural_stars: number;
  obtainable: boolean;
  can_awaken: boolean;
  awaken_level: number;
  awaken_bonus: string;
  skills: number[];
  skill_ups_to_max: number;
  leader_skill?: any;
  homunculus_skills: any[];
  base_hp: number;
  base_attack: number;
  base_defense: number;
  speed: number;
  crit_rate: number;
  crit_damage: number;
  resistance: number;
  accuracy: number;
  raw_hp: number;
  raw_attack: number;
  raw_defense: number;
  max_lvl_hp: number;
  max_lvl_attack: number;
  max_lvl_defense: number;
  awakens_from?: any;
  awakens_to: number;
  awaken_cost: Awakencost[];
  source: Source[];
  fusion_food: boolean;
  homunculus: boolean;
  craft_cost?: any;
  craft_materials: any[];
  image: string;
};

type Source = {
  id: number;
  url: string;
  name: string;
  description: string;
  farmable_source: boolean;
}

type Awakencost = {
  item: Item;
  quantity: number;
}

type Item = {
  id: number;
  com2us_id: number;
  url: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  sell_value?: any;
}