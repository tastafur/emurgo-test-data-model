export const statusTypes = {
  PENDING: 'pending',
  IN_PROCESS: 'in-process',
  DONE: 'done',
};

export type pizzaType = {
  id: number;
  status: keyof typeof statusTypes;
  recipe: number;
  removeIngredients: number[];
  doubleIngredients: number[];
  calories: number;
};
