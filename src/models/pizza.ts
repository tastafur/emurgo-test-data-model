export const statusTypes = {
  PENDING: 'pending',
  IN_PROCESS: 'in-process',
  DONE: 'DONE',
};

export type pizzaType = {
  id: number;
  status: keyof typeof statusTypes;
  recipe: number;
  removeIngredients: number[];
  doubleIngredientes: number[];
  calories: number;
};
