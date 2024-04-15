import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.appIconContainer}>
        <Image
          source={require('../assets/appIcon.png')}
          style={styles.appIcon}
        />
      </View>
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
});
