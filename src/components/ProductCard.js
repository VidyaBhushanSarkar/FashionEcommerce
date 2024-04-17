import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function ProductCard({item, handleLiked}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductsDetails', {item});
      }}
      style={styles.container}>
      <View>
        <Image source={{uri: item.image}} style={styles.coverImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <View style={styles.wishlistIconContainer}>
        <TouchableOpacity
          onPress={() => {
            handleLiked(item);
          }}>
          {item?.isliked ? (
            <Icon name="heart" size={20} color={'#e55b5b'} />
          ) : (
            <Icon name="heart-o" size={20} color={'#e55b5b'} />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 20,
  },
  coverImage: {
    height: 256,
    width: 155,
    borderRadius: 20,
    marginRight: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444444',
    marginLeft: 10,
    marginTop: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#9c9c9c',
    marginLeft: 10,
  },
  wishlistIconContainer: {
    top: 30,
    right: 20,
    position: 'absolute',
    backgroundColor: '#fff',
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
