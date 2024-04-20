import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import {useRoute} from '@react-navigation/native';
import {CartContext} from '../context/CartContext';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const colorsArray = [
  '#91A1B0',
  '#B11D1D',
  '#1F44A3',
  '#9F632A',
  '#1D752B',
  '#000000',
];
export default function ProductsDetails() {
  const {addToCart} = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const handleAddToCart = item => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCart(item);
  };
  const route = useRoute();
  const item = route.params.item;
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Header />
      </View>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{item.title}</Text>
        <Text style={styles.detailsText}>${item.price}</Text>
      </View>
      <Text style={[styles.detailsText, styles.sizeText]}>Size</Text>

      <View style={styles.sizeContainer}>
        {sizes.map((size, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.sizeValueContainer}
              onPress={() => {
                setSelectedSize(size);
              }}>
              <Text
                style={[
                  styles.sizes,
                  selectedSize === size && {color: '#E55B5B'},
                ]}>
                {size}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={[styles.detailsText, styles.sizeText]}>Colors</Text>
      <View style={styles.colorContainer}>
        {colorsArray.map((color, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedColor(color);
              }}
              style={[
                styles.selectedCircle,
                selectedColor === color && {borderColor: color, borderWidth: 2},
              ]}>
              <View style={[styles.circle, {backgroundColor: color}]} />
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleAddToCart(item);
        }}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderContainer: {
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 410,
  },
  detailsContainer: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
  },
  detailsText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444444',
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  sizeValueContainer: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  sizes: {
    fontSize: 18,
    fontWeight: '600',
  },
  colorContainer: {
    padding: 10,
    flexDirection: 'row',
    columnGap: 10,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    padding: 10,
  },
  selectedCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '93%',
    backgroundColor: '#E96E6E',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    padding: 15,
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
});
