import {takeLatest, put, take, cancel, select, all} from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';

const call: any = Effects.call;

import {FETCH_PIZZAS, setPizzas} from '../actions/pizzas';

import pizzas from '../mocks/pizzas.json';

// Actions types
import {FETCH_RECIPES_FINISH} from '../actions/recipes';
import {FETCH_INGREDIENTS_FINISH} from '../actions/ingredients';

// Selectors
import {selectRecipesNormalize} from '../selectors/recipes';
import {selectIngredientsNormalize} from '../selectors/ingredients';
import {addCaloriesToPizzas} from '../utils/pizzas';
import {pizzaType} from '../models/pizza';
export function* fetchPizzas(): Generator {
  try {
    // Show loading with a change state yield put(isLoadingPizzas(true));
    /* Check if you have auth
        yield put(isAuthForCall());

        const checkAction = yield take(IS_AUTH_FINISH);

        if (checkAction.error) {
          yield cancel();
        }
        */
    // Get accessToken const token = yield select(getAccessToken);
    /* here I would make the call for service
         const allergens = yield call(getPizzas, {
          baseUrl: configBase.API_BASE_URL,
          token,
          params: {
            x,
          },
        });
         */
    // Check data and save
    const checkActions: any = yield all([
      take(FETCH_RECIPES_FINISH),
      take(FETCH_INGREDIENTS_FINISH),
    ]);

    if (checkActions[0].error || checkActions[1].error) {
      yield cancel();
    }

    if (pizzas.length) {
      const recipes = yield select(selectRecipesNormalize);
      const ingredients = yield select(selectIngredientsNormalize);

      const pizzasCalorieFed = (yield call(
        addCaloriesToPizzas,
        pizzas,
        recipes,
        ingredients,
      )) as pizzaType[];

      yield put(setPizzas(pizzasCalorieFed));
    }
    // Hide loading with a change state yield put(isLoadingPizzas(false));
  } catch (e) {
    // Hide loading with a change state yield put(isLoadingPizzas(false));
    // here I would handle errors yield call(errorHandler, {payload: e});
    yield call(console.log, e);
  }
}

export function* watchFetchPizzasProcess() {
  yield takeLatest(FETCH_PIZZAS, fetchPizzas);
}
