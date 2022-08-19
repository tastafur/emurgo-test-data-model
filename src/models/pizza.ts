export const statusTypes = {
  PENDING: 'pending',
  IN_PROCESS: 'in-process',
  DONE: 'done',
};

type Keys = keyof typeof statusTypes;

export type pizzaType = {
  id: number;
  status: typeof statusTypes[Keys];
  recipe: number;
  removeIngredients: number[];
  doubleIngredients: number[];
  calories?: number;
};
