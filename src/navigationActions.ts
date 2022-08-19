// RootNavigation.js

import {createNavigationContainerRef} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: never, params: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function push(...args: any[]) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.dispatch(StackActions.push(...args));
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
