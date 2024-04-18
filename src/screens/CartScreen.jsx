import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

export default function CartScreen() {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    padding: 20,
  },
});
