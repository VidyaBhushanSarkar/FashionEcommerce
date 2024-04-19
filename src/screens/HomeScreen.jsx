import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens'];
export default function HomeScreen() {
  const [products, setProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState('Trending Now');
  const [isliked, setIsLiked] = useState(false);
  const handleLiked = item => {
    const newProducts = products.map(prod => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isliked: true,
        };
      }
      return prod;
    });
    setProducts(newProducts);
  };

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={{marginBottom: 20}}>
        <Header />
      </View>
      <FlatList
        ListHeaderComponent={
          <>
            <View>
              <Text style={styles.homeText}>Match Your Style</Text>
              <View style={styles.searchBox}>
                <Icon name="search" style={styles.searchIcon} size={18} />
                <TextInput placeholder="Search" />
              </View>
            </View>
            <FlatList
              data={categories}
              renderItem={({item, index}) => (
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
          </>
        }
        data={products}
        renderItem={({item, index}) => (
          <ProductCard item={item} handleLiked={handleLiked} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
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
