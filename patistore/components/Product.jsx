import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Product({imgUrl, name, price, inStock}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: imgUrl}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      {!inStock && <Text style={styles.outOfStock}>STOKTA YOK</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 10,
  },
  outOfStock: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Product;
