import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SessionType} from '../types/user-data-type.ts';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return React.useReducer(
    (state: [boolean, T | null], action: T | null): [boolean, T | null] => [
      false,
      action,
    ],
    initialValue,
  ) as UseStateHook<T>;
}

export async function setStorageItemAsync(key: string, value: object | null) {
  if (value == null) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  } else {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
}

export function useStorageState(key: string): UseStateHook<SessionType> {
  // Public
  const [state, setState] = useAsyncState<SessionType>();

  // Get
  React.useEffect(() => {
    AsyncStorage.getItem(key).then(value => {
      setState(value ? JSON.parse(value) : null);
    });
  }, [key, setState]);

  // Set
  const setValue = React.useCallback(
    (value: SessionType | null) => {
      setStorageItemAsync(key, value).then(() => {
        setState(value);
      });
    },
    [key, setState],
  );

  return [state, setValue];
}
