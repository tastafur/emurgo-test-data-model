/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useEffect} from 'react';
import {FloatingAction} from 'react-native-floating-action';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

// Components
import Header from '../components/Header';
import Section from '../components/Section';

// Style
import Colors from '../style/colors';

// Models
import {orderTypeWithCalories} from '../models/order';

// Actions
import {fetchAllergens} from '../actions/allergens';
import {fetchFoodTypes} from '../actions/foodTypes';
import {fetchIngredients} from '../actions/ingredients';
import {fetchOrders} from '../actions/orders';
import {fetchPizzas} from '../actions/pizzas';
import {fetchRecipes} from '../actions/recipes';
import {cleanOrdersAndPizzas} from '../actions/clean';

// Selects
import {selectOrders} from '../selectors/orders';

// Types
import {PropsHome} from '../app';

const Home = ({navigation}: PropsHome) => {
  const dispatch = useDispatch();
  const orders: orderTypeWithCalories[] = useSelector(selectOrders);

  useEffect(() => {
    dispatch(fetchPizzas());
    dispatch(fetchAllergens());
    dispatch(fetchFoodTypes());
    dispatch(fetchIngredients());
    dispatch(fetchOrders());
    dispatch(fetchRecipes());
  }, [dispatch]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = ({item}: {item: orderTypeWithCalories}) => {
    const pizzas = item.pizzas as string[];
    return (
      <Section title={item.name} calories={item.caloriesTotal}>
        {pizzas.reduce(
          (acc: string, curr: string): string =>
            acc !== '' ? acc + ', ' + curr : curr,
          '',
        )}
      </Section>
    );
  };

  const actionsButton = [
    {
      text: 'Clear Orders',
      icon: require('../assets/icons/trash.png'),
      name: 'bt_order_clear',
      buttonSize: 56,
      size: 56,
      margin: 0,
    },
    {
      text: 'Create Order',
      icon: require('../assets/icons/edit.png'),
      name: 'bt_order_create',
      buttonSize: 56,
      size: 56,
      margin: 0,
    },
  ];

  const pressActionButton = useCallback(
    (name?: string): void => {
      switch (name) {
        case 'bt_order_clear':
          dispatch(cleanOrdersAndPizzas());
          break;
        case 'bt_order_create':
          navigation.navigate('Ordering');
          break;
      }
    },
    [dispatch, navigation],
  );

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        ListEmptyComponent={
          <Text style={styles.emptyFlatList}>
            {'Order list empty,\n add new orders'}
          </Text>
        }
        ListHeaderComponent={<Header />}
        ListFooterComponent={<View style={styles.footer} />}
        scrollEnabled={true}
        data={orders}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        style={backgroundStyle}
      />
      <FloatingAction actions={actionsButton} onPressItem={pressActionButton} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  emptyFlatList: {
    fontSize: 34,
    fontWeight: '600',
    lineHeight: 42,
    textAlign: 'center',
    color: 'red',
  },
  footer: {
    paddingBottom: 30,
  },
});

export default Home;
