import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import TodoItem from './src/components/TodoItem';

const App = () => {
  const [todo, setTodo] = useState({
    text: '',
    isCompleted: false,
  });
  const [todos, setTodos] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>2</Text>
      </View>
      {todos.length > 0 && (
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem text={item.text} />}
        />
      )}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Yapılacak..."
          style={styles.input}
          placeholderTextColor="#808080"
          onChangeText={text => setTodo({ text, isCompleted: false })}
        />
        <TouchableOpacity
          style={[styles.saveBtn, todo.text.length > 0 && styles.activeBtn]}>
          <Text style={styles.saveText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 35,
    color: '#FEA400',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#37474F',
    padding: 15,
    borderRadius: 10,
  },
  input: {
    border: 'none',
    borderBottomColor: '#7E97A3',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  saveBtn: {
    borderRadius: 10,
    backgroundColor: '#808080',
    padding: 10,
    alignItems: 'center',
  },
  activeBtn: {
    backgroundColor: '#FEA400',
  },
  saveText: {
    color: '#fff'
  },
});

export default App;
