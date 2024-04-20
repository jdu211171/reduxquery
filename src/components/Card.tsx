import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Card = () => {
  return (
    <View
      style={[styles.card, {backgroundColor: 'black', borderColor: 'black'}]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Runtime</Text>
        <TouchableOpacity>
          <Text style={styles.headerLink}>Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={[styles.mainText]}>42</Text>
        <Text style={[styles.mainLink]}>ms</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Beats 92.42%</Text>
        </TouchableOpacity>
        <Text style={[styles.footerText]}>of users with JavaScript</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  headerText: {
    color: '#BDBFB7',
  },
  headerLink: {
    fontSize: 15,
    color: '#BDBFB7',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  mainText: {
    fontWeight: '600',
  },
  mainLink: {
    fontWeight: '300',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    fontSize: 15,
  },
  footerLink: {
    color: '#2CAD3D',
    fontWeight: '600',
  },
  footerText: {},
});

export default Card;
