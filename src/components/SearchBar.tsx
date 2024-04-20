import React from 'react-native';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';

const SearchBar = () => {
  const [text, setText] = useState('');

  const handleSearch = () => {
    console.log(text);
    setText('');
  };

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? '#333' : '#fff',
          borderColor: isDarkMode ? '#555' : '#ddd',
        },
      ]}>
      <TextInput
        style={[styles.input, {color: isDarkMode ? '#fff' : '#000'}]}
        placeholder="投稿を検索する"
        placeholderTextColor={isDarkMode ? '#333' : '#999'}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Ionicons
          name="search"
          color={isDarkMode ? '#318CE7' : '#666'}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10,
    padding: 5,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
