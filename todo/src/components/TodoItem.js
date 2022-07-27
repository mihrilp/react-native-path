import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function TodoItem({ text }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86AF56',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default TodoItem;
