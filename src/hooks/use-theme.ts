import {useColorScheme} from 'react-native';
import {Colors} from '../constants';

export function useTheme() {
  const systemTheme = useColorScheme() === 'dark' ? 'dark' : 'light';

  const themeTextStyle =
    systemTheme === 'dark' ? Colors.dark.text : Colors.light.text;
  const themeContainerStyle =
    systemTheme === 'dark' ? Colors.dark.background : Colors.light.background;

  return {themeTextStyle, themeContainerStyle};
}
