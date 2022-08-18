import {takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_RECIPES, setRecipes} from '../actions/recipes';

import recipes from '../mocks/recipes.json';
export function* fetchRecipes() {
  try {
    // Show loading with a change state yield put(isLoadingRecipes(true));
    /* Check if you have auth
            yield put(isAuthForCall());

            const checkAction = yield take(IS_AUTH_FINISH);

            if (checkAction.error) {
              yield cancel();
            }
            */
    // Get accessToken const token = yield select(getAccessToken);
    /* here I would make the call for service
             const allergens = yield call(getRecipes, {
              baseUrl: configBase.API_BASE_URL,
              token,
              params: {
                x,
              },
            });
             */
    // Check data and save
    if (recipes.length) {
      yield put(setRecipes(recipes));
    }
    // Hide loading with a change state yield put(isLoadingRecipes(false));
  } catch (e) {
    // Hide loading with a change state yield put(isLoadingRecipes(false));
    // here I would handle errors yield call(errorHandler, {payload: e});
    yield call(console.log, e);
  }
}

export function* watchFetchRecipesProcess() {
  yield takeLatest(FETCH_RECIPES, fetchRecipes);
}
