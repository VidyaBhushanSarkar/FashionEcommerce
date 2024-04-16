import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductCard() {
  const [isliked, setIsLiked] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/girl1.png')}
        style={styles.coverImage}
      />
      <Text style={styles.productTitle}>Jacket Jeans</Text>
      <Text style={styles.productPrice}>$45.9</Text>
      <TouchableOpacity
        style={styles.wishlistIconContainer}
        onPress={() => setIsLiked(!isliked)}>
        {isliked ? (
          <Icon name="heart" size={20} color={'#e55b5b'} />
        ) : (
          <Icon name="heart-o" size={20} color={'#e55b5b'} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'relative',
  },
  coverImage: {
    height: 265,
    width: 180,
    borderRadius: 20,
    marginVertical: 10,
  },
  productTitle: {fontSize: 18, color: '#444444', marginLeft: 10},
  productPrice: {fontSize: 18, color: '#9c9c9c', marginLeft: 10},
  wishlistIconContainer: {
    top: 22,
    right: 12,
    position: 'absolute',
    backgroundColor: '#fff',
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
