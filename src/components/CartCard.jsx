import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CartCard({item}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.productContent}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <View style={{flexDirection: 'row', columnGap: 10}}>
          <View
            style={[styles.productColor, {backgroundColor: item.color}]}></View>
          <View style={styles.productSize}>
            <Text style={styles.productSizeText}>{item.size}</Text>
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
    fontSize: 13,
    fontWeight: '500',
  },
});
