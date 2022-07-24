import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import products from './products.json';
import Product from './components/Product';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>PatikaStore</Text>
      <TextInput style={styles.searchBar} placeholder="Ara..." />
      <FlatList
        data={products}
        renderItem={({ item }) =>
          <Product imgUrl={item.imgURL} name={item.title} price={item.price} />
        }
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default App;
