import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../components/Card.tsx';
import Pagination from '../components/Pagination.tsx';
import SearchBar from '../components/SearchBar.tsx';
import {useTheme} from '../hooks/use-theme.ts';

function Home() {
  const {themeBorderColor, themeBackgroundColor} = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: themeBackgroundColor}}>
      <View style={[styles.container]}>
        <View
          style={{
            top: 0,
            borderBottomWidth: 1,
            borderBottomColor: themeBorderColor,
          }}>
          <Pagination total={10} />
        </View>
        <Card />
        {/*<Text>Home Screen</Text>*/}
        {/*<Pagination total={10} />*/}
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
