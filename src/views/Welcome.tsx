import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Button from '../components/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import COLORS from '../constants/colors';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<any, any>;
interface Props {
  navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={[COLORS.secondary, COLORS.primary]}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/hero1.jpg')}
            style={styles.image1}
          />

          <Image
            source={require('../assets/hero3.jpg')}
            style={styles.image2}
          />

          <Image
            source={require('../assets/hero3.jpg')}
            style={styles.image3}
          />

          <Image
            source={require('../assets/hero2.jpg')}
            style={styles.image4}
          />
        </View>

        {/* content  */}

        <View style={styles.content}>
          <Text style={styles.title}>Let's Get</Text>
          <Text style={styles.title}>Started</Text>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Connect with each other with chatting
            </Text>
            <Text style={styles.text}>
              Calling, Enjoy Safe and private texting
            </Text>
          </View>

          <Button
            title="Join Now"
            onPress={() => navigation.navigate('Signup')}
            style={styles.button}
          />

          <View style={styles.row}>
            <Text style={styles.text}>Already have an account ?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.boldText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  image1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: 'absolute',
    top: 10,
    transform: [{translateX: 20}, {translateY: 50}, {rotate: '-15deg'}],
  },
  image2: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: 'absolute',
    top: -30,
    left: 100,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '-5deg'}],
  },
  image3: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: 'absolute',
    top: 130,
    left: -50,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '15deg'}],
  },
  image4: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: 'absolute',
    top: 110,
    left: 100,
    transform: [{translateX: 50}, {translateY: 50}, {rotate: '-15deg'}],
  },
  content: {
    paddingHorizontal: 22,
    position: 'absolute',
    top: 400,
    width: '100%',
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: COLORS.white,
  },
  textContainer: {
    marginVertical: 22,
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
    marginVertical: 4,
  },
  button: {
    marginTop: 22,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

export default WelcomeScreen;
