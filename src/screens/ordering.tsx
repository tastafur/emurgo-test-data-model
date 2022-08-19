/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

import {useDispatch, useSelector} from 'react-redux';

// Style
import Colors from '../style/colors';

// Models
import {recipeFormatDrownType} from '../models/recipe';
import {foodTypeFormatDrownType} from '../models/foodType';

// Selects
import {
  RootStateRecipes,
  selectRecipesFormatDropDown,
} from '../selectors/recipes';
import {selectFoodTypeFormatDropDown} from '../selectors/foodTypes';

// Utils
import {allergenPaths} from '../utils/allergens';
import {statusTypes} from '../models/pizza';
import {addOrder} from '../actions/orders';

const Ordering = () => {
  const dispatch = useDispatch();
  const [selectedFoodType, setSelectedFoodType] = useState<number>();
  const [selectedRecipe, setSelectedRecipe] = useState<recipeFormatDrownType>();
  const [selectedAddIngredients, setSelectedAddIngredients] = useState<[]>([]);
  const [selectedRemoveIngredients, setSelectedRemoveIngredients] = useState<
    []
  >([]);
  const foodTypesFormatDrown: foodTypeFormatDrownType[] = useSelector(
    selectFoodTypeFormatDropDown,
  );
  const recipesFormatDrown: recipeFormatDrownType[] = useSelector(
    (state: RootStateRecipes) =>
      selectRecipesFormatDropDown(state, selectedFoodType),
  );

  useEffect(() => {
    if (
      recipesFormatDrown.length === 0 ||
      (selectedRecipe &&
        !recipesFormatDrown.some(
          recipe => recipe.value === selectedRecipe.value,
        ))
    ) {
      setSelectedRecipe(undefined);
    }
  }, [recipesFormatDrown, selectedRecipe]);

  const renderItemAll = (item: any) => {
    return (
      <View style={styles.item} key={item.value}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const renderItemPizzas = (item: any) => {
    return (
      <View style={styles.item} key={item.value}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.allergens.length > 0 &&
          item.allergens.map((allergen: number) => (
            <Image
              key={allergen}
              style={styles.icon}
              source={allergenPaths[allergen]}
            />
          ))}
      </View>
    );
  };

  const onPressOrder = useCallback(() => {
    const pizza = {
      id: Math.floor(Math.random() * (9999 - 20 + 1)) + 20,
      status: statusTypes.PENDING,
      recipe: selectedRecipe?.value as number,
      doubleIngredients: selectedAddIngredients,
      removeIngredients: selectedRemoveIngredients,
    };
    const order = {
      id: Math.floor(Math.random() * (9999 - 20 + 1)) + 20,
      name: 'Ruben Romero',
      pizzas: [pizza.id],
    };
    dispatch(addOrder(order, pizza));
  }, [
    selectedRecipe?.value,
    selectedAddIngredients,
    selectedRemoveIngredients,
    dispatch,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView style={styles.containerModal}>
        <View style={styles.modalDropdown}>
          <Text style={styles.modalTitle}>Food Types:</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={foodTypesFormatDrown}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select food type"
            searchPlaceholder="Search..."
            value={selectedFoodType}
            onChange={item => {
              setSelectedFoodType(item.value);
            }}
            renderItem={renderItemAll}
          />
        </View>
        <View style={styles.modalDropdown}>
          <Text style={styles.modalTitle}>Pizzas:</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={recipesFormatDrown}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select pizza"
            searchPlaceholder="Search..."
            value={selectedRecipe?.value}
            onChange={item => {
              setSelectedRecipe(item);
            }}
            renderItem={renderItemPizzas}
          />
        </View>
        {typeof selectedRecipe?.value === 'number' && (
          <>
            <View style={styles.modalDropdown}>
              <Text style={styles.modalTitle}>Add ingredients:</Text>
              <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={selectedRecipe.ingredients}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select ingredient"
                searchPlaceholder="Search..."
                value={selectedAddIngredients}
                onChange={item => {
                  setSelectedAddIngredients(item);
                }}
                renderItem={renderItemAll}
                renderSelectedItem={(item, unSelect) => (
                  <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                    <View style={styles.selectedStyle}>
                      <Text style={styles.textSelectedStyle}>{item.label}</Text>
                      <Image
                        style={styles.icon}
                        source={require('../assets/icons/trash.png')}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={styles.modalDropdown}>
              <Text style={styles.modalTitle}>Remove ingredients:</Text>
              <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={selectedRecipe.ingredients}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select ingredient"
                searchPlaceholder="Search..."
                value={selectedRemoveIngredients}
                onChange={item => {
                  setSelectedRemoveIngredients(item);
                }}
                renderItem={renderItemAll}
                renderSelectedItem={(item, unSelect) => (
                  <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                    <View style={styles.selectedStyle}>
                      <Text style={styles.textSelectedStyle}>{item.label}</Text>
                      <Image
                        style={styles.icon}
                        source={require('../assets/icons/trash.png')}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPressOrder}>
              <Text style={styles.textStyle}>Order</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    width: '100%',
    height: '100%',
  },
  containerModal: {
    flex: 1,
    paddingHorizontal: 24,
  },
  modalDropdown: {
    marginTop: 15,
  },
  button: {
    marginVertical: 15,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
  },

  dropdown: {
    //margin: 16,
    height: 50,
    backgroundColor: 'white',
    //borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    color: 'black',
  },
  icon: {
    //marginRight: 5,
    width: 26,
    height: 26,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
    color: 'black',
  },
});

export default Ordering;
