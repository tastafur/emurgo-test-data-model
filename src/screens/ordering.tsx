/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';

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

// Types
import {PropsOrdering} from '../app';

// Utils
import {allergenPaths} from '../utils/allergens';

const Ordering = ({navigation}: PropsOrdering) => {
  const dispatch = useDispatch();
  const [selectedFoodType, setSelectedFoodType] = useState<number>();
  const [selectedRecipe, setSelectedRecipe] = useState<number>();
  const foodTypesFormatDrown: foodTypeFormatDrownType[] = useSelector(
    selectFoodTypeFormatDropDown,
  );
  const recipesFormatDrown: recipeFormatDrownType[] = useSelector(
    (state: RootStateRecipes) =>
      selectRecipesFormatDropDown(state, selectedFoodType),
  );

  console.log('recipes', recipesFormatDrown);

  const renderItemFoodTypes = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const renderItemPizzas = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.allergens.length > 0 &&
          item.allergens.map((allergen: number) => (
            <Image style={styles.icon} source={allergenPaths[allergen]} />
          ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.containerModal}>
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
            renderItem={renderItemFoodTypes}
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
            value={selectedRecipe}
            onChange={item => {
              setSelectedRecipe(item.value);
            }}
            renderItem={renderItemPizzas}
          />
        </View>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
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
    marginTop: 15,
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
});

export default Ordering;
