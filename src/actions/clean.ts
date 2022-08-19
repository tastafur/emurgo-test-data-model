export const CLEAN_STATE_APP = 'CLEAN_STATE_APP';
export const CLEAN_ORDERS_AND_PIZZAS = 'CLEAN_ORDERS_AND_PIZZAS';
export function cleanStateApp() {
  return {
    type: CLEAN_STATE_APP,
  };
}

export function cleanOrdersAndPizzas() {
  return {
    type: CLEAN_ORDERS_AND_PIZZAS,
  };
}
