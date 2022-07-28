import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import TodoItem from './src/components/TodoItem';

const App = () => {
  const [todo, setTodo] = useState({
    id: 0,
    text: '',
    isCompleted: false,
  });
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({
      id: 0,
      text: '',
      isCompleted: false,
    });
  };

  const removeTodo = (item) => {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Yapılacaklar</Text>
          <Text style={styles.title}>{todos.length}</Text>
        </View>
        {todos.length > 0 && (
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                text={item.text}
                isTodoCompleted={item.isCompleted}
                onPress={() => {
                  item.isCompleted = !item.isCompleted;
                  removeTodo(item);
                  setCompletedTodos([...completedTodos, item]);
                }}
                onLongPress={() => removeTodo(item)}
              />
            )}
          />
        )}
        {completedTodos.length > 0 && (
          <FlatList
            data={completedTodos}
            renderItem={({ item }) => (
              <TodoItem
                text={item.text}
                isTodoCompleted={item.isCompleted}
                onPress={() => {
                  item.isCompleted = !item.isCompleted;
                  setCompletedTodos(completedTodos.filter((todo) => todo !== item));
                  setTodos([...todos, item]);
                }}
                onLongPress={() => setCompletedTodos(completedTodos.filter((todo) => todo !== item))}
              />
            )}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Yapılacak..."
          style={styles.input}
          placeholderTextColor="#808080"
          onChangeText={text =>
            setTodo({ id: todos.length + 1, text, isCompleted: false })
          }
          value={todo.text}
        />
        <TouchableOpacity
          style={[styles.saveBtn, todo.text.length > 0 && styles.activeBtn]} onPress={addTodo}>
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
    marginBottom: 30,
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
    color: '#fff',
  },
  saveBtn: {
    borderRadius: 10,
    backgroundColor: '#808080',
    padding: 13,
    alignItems: 'center',
  },
  activeBtn: {
    backgroundColor: '#FEA400',
  },
  saveText: {
    color: '#fff',
  },
});

export default App;
