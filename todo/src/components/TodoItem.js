import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function TodoItem({ text, isTodoCompleted, onPress, onLongPress }) {
  const [isCompleted, setIsCompleted] = useState(isTodoCompleted);
  return (
    <TouchableOpacity
      style={[styles.container, isCompleted && styles.completedTodo]}
      onPress={() => {
        setIsCompleted(!isCompleted);
        onPress();
      }}
      onLongPress={onLongPress}
    >
      <Text style={[styles.text, isCompleted && styles.completedText]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86AF56',
    borderRadius: 5,
    marginBottom: 13,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  completedTodo: {
    backgroundColor: '#37474F',
  },
  completedText: {
    color: '#596165',
    textDecorationColor: '#596165',
    textDecorationLine: 'line-through',
  }
});

export default TodoItem;
