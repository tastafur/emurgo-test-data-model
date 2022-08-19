export type orderType = {
  id: number;
  pizzas: number[] | string[];
  name: string;
};

export interface orderTypeWithCalories extends orderType {
  caloriesTotal: number;
}
