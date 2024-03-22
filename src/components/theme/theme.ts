import {Appearance} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import darkTheme from './theme-dark';
import lightTheme from './theme-light';
import {Theme, UITheme} from '../../types/Theme';

export const DEFAULT_THEME: UITheme = lightTheme;

export const defaultTheme: Theme = {
  uiTheme: DEFAULT_THEME,
  mode: DEFAULT_THEME.mode,
  setMode: () => {},
};

export const getSystemThemeMode = (): any => Appearance.getColorScheme();

export const themes: UITheme[] = [lightTheme, darkTheme];

export const getUITheme = (mode: string): UITheme => {
  const theme: UITheme | null = themes.reduce(
    (currentTheme: UITheme | null, it: UITheme) =>
      it.mode.includes(mode) ? it : currentTheme,
    null,
  );
  return theme || DEFAULT_THEME;
};

export const buildStyles = (mode: string, uiTheme: UITheme) => {
  EStyleSheet.build({
    $theme: mode,
    $androidSummaryFontWeight: uiTheme.androidSummaryFontWeight,
    $resolved: uiTheme.colors.$icon,
    ...uiTheme.colors,
  });
};

export const getThemeMode = async (): Promise<string> => {
  let mode: string;

  try {
    const item: string | null = await AsyncStorage.getItem('theme_mode');
    const storedMode: string | null = item ? JSON.parse(item) : null;
    mode = storedMode || getSystemThemeMode();
  } catch (e) {
    mode = DEFAULT_THEME.mode;
  }

  return mode;
};
