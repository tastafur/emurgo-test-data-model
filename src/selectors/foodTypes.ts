import {foodType, foodTypeFormatDrownType} from '../models/foodType';

interface RootState {
  foodTypes: {
    data: {[key: number]: foodType};
  };
}

export const selectFoodTypeFormatDropDown = (
  state: RootState,
): foodTypeFormatDrownType[] =>
  Object.keys(state.foodTypes.data).map((id: string) => ({
    value: Number(id),
    label: state.foodTypes.data[Number(id)].type,
  }));
