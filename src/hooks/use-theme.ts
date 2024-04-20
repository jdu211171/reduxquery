import {useColorScheme} from 'react-native';
import Colors from '../constants/Colors';

export function useTheme() {
  const systemTheme = useColorScheme() === 'dark' ? 'dark' : 'light';

  const themeTextColor =
    systemTheme === 'dark' ? Colors.dark.text : Colors.light.text;
  const themeBackgroundColor =
    systemTheme === 'dark' ? Colors.dark.background : Colors.light.background;
  const themeBorderColor =
    systemTheme === 'dark' ? Colors.dark.border : Colors.light.border;

  return {themeTextColor, themeBackgroundColor, themeBorderColor};
}
