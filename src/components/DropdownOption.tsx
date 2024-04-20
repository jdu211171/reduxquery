import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const getDynamicStyles = (isDarkMode: boolean) => ({
  popupContent: {
    backgroundColor: isDarkMode ? '#333' : 'white',
    color: isDarkMode ? '#fff' : 'black',
    shadowColor: isDarkMode ? '#fff' : '#000',
  },
  iconColor: isDarkMode ? 'white' : '#999',
  labelColor: isDarkMode ? '#fff' : 'black',
});
const PopupMenu = ({
  options,
}: {
  options: Array<{
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    action: () => void;
    lightColor: string;
    darkColor: string;
  }>;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const dynamicStyles = getDynamicStyles(isDarkMode);
  const handleToggleMenu = () => setShowMenu(!showMenu);
  const handleMenuOption = (action: () => void) => {
    action();
    setShowMenu(false);
  };

  return (
    <View style={staticStyles.popup}>
      <TouchableOpacity onPress={handleToggleMenu}>
        <Ionicons
          name="ellipsis-vertical"
          size={20}
          color={dynamicStyles.iconColor}
        />
      </TouchableOpacity>

      {showMenu && (
        <View
          style={[staticStyles.popupContentBase, dynamicStyles.popupContent]}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={staticStyles.menuOption}
              onPress={() => handleMenuOption(option.action)}>
              <Ionicons
                name={option.icon}
                size={16}
                color={isDarkMode ? option.darkColor : option.lightColor}
              />
              <Text
                style={[
                  staticStyles.menuLabel,
                  {color: dynamicStyles.labelColor},
                ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default PopupMenu;

const staticStyles = StyleSheet.create({
  popup: {
    position: 'relative',
    display: 'flex',
  },
  popupContentBase: {
    width: 120,
    textAlign: 'left',
    borderRadius: 6,
    padding: 8,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    marginLeft: -130,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 24,
  },
  menuOption: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  menuLabel: {
    marginLeft: 8,
  },
});
