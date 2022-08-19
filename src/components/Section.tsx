import React, {type PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View, Image} from 'react-native';
import Colors from '../style/colors';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
    calories: number;
  }>
> = ({children, title, calories}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <View>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
      <View style={styles.sectionContainerCalories}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/icons/calories.png')}
        />
        <Text
          style={[
            styles.sectionCalories,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {calories}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionContainerCalories: {
    justifyContent: 'center',
  },
  sectionCalories: {
    fontSize: 18,
    fontWeight: '400',
  },
  sectionImage: {
    width: 40,
    height: 40,
  },
});

export default Section;
