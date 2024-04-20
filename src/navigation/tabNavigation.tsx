import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getDefaultHeaderHeight} from '@react-navigation/elements';
import Home from '../views/Home.tsx';
import {Ionicons} from '@expo/vector-icons';
import Folder from '../views/Folder.tsx';
import Bookmark from '../views/Bookmark.tsx';
import Setting from '../views/Setting.tsx';
import Pagination from '../components/Pagination.tsx';
import {View} from 'react-native';
import SearchBar from '../components/SearchBar.tsx';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Folder') {
            iconName = focused ? 'folder-open' : 'folder-outline';
          } else if (route.name === 'Bookmark') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2CAD3D', // 'deepskyblue'
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        // header: () => <SearchBar />, // <Pagination total={10} />,
        // header: () => <Pagination total={10} />,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   header: () => <Pagination total={10} />,
        // }}
      />
      <Tab.Screen name="Folder" component={Folder} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default Tabs;
