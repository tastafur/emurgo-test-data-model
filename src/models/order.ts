import {pizzaType} from './pizza';
export type orderType = {
  id: number;
  pizzas: pizzaType[];
  name: string;
};
