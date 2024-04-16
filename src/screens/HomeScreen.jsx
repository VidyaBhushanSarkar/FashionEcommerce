import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens'];
export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Trending Now');
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View>
        <Header />
        <Text style={styles.homeText}>Match Your Style</Text>
        <View style={styles.searchBox}>
          <Icon name="search" style={styles.searchIcon} size={18} />
          <TextInput placeholder="Search" />
        </View>
      </View>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        keyExtractor={item => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ProductCard />
        <ProductCard />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ProductCard />
        <ProductCard />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  homeText: {
    fontSize: 28,
    marginTop: 25,
    color: '#000000',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 48,
    marginVertical: 20,
  },
  searchIcon: {
    paddingHorizontal: 15,
    color: '#c0c0c0',
  },
});
