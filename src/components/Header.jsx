import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function Header({isCart}) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home_Stack');
        }}
        style={styles.appIconContainer}>
        {isCart ? (
          <Ionicons name="chevron-back" size={24} color={'#e96e6e'} />
        ) : (
          <Image
            source={require('../assets/appIcon.png')}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCartText}>My Cart</Text>}

      <TouchableOpacity
        style={styles.dpContainer}
        onPress={() => {
          navigation.navigate('Account');
        }}>
        <Image source={require('../assets/dp.png')} style={styles.dp} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 20,
  },
  appIconContainer: {
    backgroundColor: 'white',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dpContainer: {
    backgroundColor: 'white',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: 28,
    height: 28,
  },
  dp: {
    width: 35,
    height: 35,
  },
  myCartText: {fontSize: 28, fontWeight: '600', color: '#000000'},
});
