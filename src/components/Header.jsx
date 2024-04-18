import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header({isCart}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.appIconContainer}>
        {isCart ? (
          <Ionicons name="chevron-back" size={24} color={'#e96e6e'} />
        ) : (
          <Image
            source={require('../assets/appIcon.png')}
            style={styles.appIcon}
          />
        )}
      </View>
      <Text style={styles.myCartText}>My Cart</Text>
      <View style={styles.dpContainer}>
        <Image source={require('../assets/dp.png')} style={styles.dp} />
      </View>
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
