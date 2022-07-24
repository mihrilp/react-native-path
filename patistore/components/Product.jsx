import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Product({imgUrl, name, price}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: imgUrl}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Product;
