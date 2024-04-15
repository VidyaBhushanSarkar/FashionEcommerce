import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Category({
  item,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && {
            color: '#fff',
            backgroundColor: '#e96e6e',
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#938f8f',
    textAlign: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
