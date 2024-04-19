import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CartCard() {
  const imageUrl =
    'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png';
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.productImage} />
      <View style={styles.productContent}>
        <Text style={styles.productTitle}>Product Title</Text>
        <Text style={styles.productPrice}>$200</Text>
        <View style={{flexDirection: 'row', columnGap: 10}}>
          <View style={styles.productColor}></View>
          <View style={styles.productSize}>
            <Text style={styles.productSizeText}>M</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Icon name={'trash'} color={'#f68cb5'} size={22} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#00000040',
    paddingBottom: 10,
  },
  productImage: {width: '25%', height: 125, borderRadius: 15},
  productContent: {flex: 1, marginLeft: 20},
  productTitle: {color: '#444444', fontSize: 18, marginBottom: 10},
  productPrice: {color: '#797979', fontSize: 18, marginBottom: 20},
  productColor: {
    width: 32,
    height: 32,
    backgroundColor: 'red',
    borderRadius: 16,
  },
  productSize: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productSizeText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
