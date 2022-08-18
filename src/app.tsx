/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import RNBootSplash from 'react-native-bootsplash';

import {useDispatch} from 'react-redux';

// Components
import Header from './components/Header';
import Section from './components/Section';
import data from './mocks/orders.json';

// Style
import Colors from './style/colors';

// Models
import {orderType} from './models/order';

// Actions
import {fetchAllergens} from './actions/allergens';
import {fetchFoodTypes} from './actions/foodTypes';
import {fetchIngredients} from './actions/ingredients';
import {fetchOrders} from './actions/orders';
import {fetchPizzas} from './actions/pizzas';
import {fetchRecipes} from './actions/recipes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllergens());
    dispatch(fetchFoodTypes());
    dispatch(fetchIngredients());
    dispatch(fetchOrders());
    dispatch(fetchPizzas());
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    const init = async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    };

    init();
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = ({item}: {item: orderType}) => (
    <Section title={item.name}>Pizzas</Section>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        ListHeaderComponent={<Header />}
        scrollEnabled={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        style={backgroundStyle}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={backgroundStyle}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
