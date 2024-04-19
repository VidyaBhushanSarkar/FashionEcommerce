import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import {CartContext} from '../context/CartContext';

export default function CartScreen() {
  const {carts} = useContext(CartContext);
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={carts}
        renderItem={({item}) => <CartCard item={item} />}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.calculation}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceLabel}>Total</Text>
          <Text style={styles.totalPriceValue}>$209.5</Text>
        </View>
        <View style={styles.shippingPriceContainer}>
          <Text style={styles.shippingPriceLabel}>Shipping</Text>
          <Text style={styles.shippingPriceValue}>$20.7</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.shippingPriceContainer}>
        <Text style={styles.shippingPriceLabel}>Shipping</Text>
        <Text style={styles.grandPriceValue}>$220.7</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  headerContainer: {
    marginBottom: 20,
  },
  calculation: {
    marginTop: 40,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  shippingPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalPriceLabel: {
    fontSize: 18,
    color: '#757575',
  },
  totalPriceValue: {
    fontSize: 18,
    color: '#888888',
  },
  shippingPriceLabel: {
    fontSize: 18,
    color: '#757575',
  },
  shippingPriceValue: {
    fontSize: 18,
    color: '#888888',
  },
  divider: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginBottom: 10,
  },
  grandPriceValue: {
    fontSize: 18,
    color: '#3C3C3C',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#E96E6E',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
