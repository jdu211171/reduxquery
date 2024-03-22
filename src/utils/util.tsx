import React from 'react';
import {Platform} from 'react-native';

export const isReactElement = (element: any): boolean => {
  return React.isValidElement(element);
};

export const isIOSPlatform = (): boolean => {
  return Platform.OS === 'ios';
};

export const isAndroidPlatform = (): boolean => {
  return Platform.OS === 'android';
};

export const removeTrailingSlash = (str: string): string => {
  return str.replace(/\/$/, '');
};

export const removeDuplicatesFromArray = (A: any[]): any[] => {
  const idsMap: Record<string, boolean> = {};
  return A.filter(it => {
    return idsMap[it.id] ? false : (idsMap[it.id] = true);
  });
};

export const arrayToMap = (
  items: any[],
  keyName: string | null,
  lowerCaseKey: boolean = false,
): Record<string, any> => {
  const key: string = keyName != null ? keyName : 'id';
  return items.reduce(
    (map, item) => ({
      ...map,
      [lowerCaseKey ? item[key].toLowerCase() : item[key]]: item,
    }),
    {},
  );
};

export const mapToArray = (map: Record<string, any>): any[] =>
  Object.keys(map).map(function (id) {
    return map[id];
  });
