export type recipeType = {
  id: number;
  name: string;
  ingredients: number[];
};

export type recipeFormatDrownType = {
  value: number;
  label: string;
  ingredients: number[];
  allergens?: number[];
};
