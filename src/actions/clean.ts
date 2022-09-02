import {createAction} from '@reduxjs/toolkit';

export const CLEAN_STATE_APP = 'CLEAN_STATE_APP';
export const CLEAN_ORDERS_AND_PIZZAS = 'CLEAN_ORDERS_AND_PIZZAS';

export const cleanStateApp = createAction(CLEAN_STATE_APP);

export const cleanOrdersAndPizzas = createAction(CLEAN_ORDERS_AND_PIZZAS);
