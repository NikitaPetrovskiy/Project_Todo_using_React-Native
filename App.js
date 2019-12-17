import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { NavBar } from './src/components/NavBar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    // {id: '1', title: 'Выучить React Native'}
  ]);

  const addTodo = title => {
    setTodos( prev => [
        ...prev,
        {
          id: Date.now().toString(),
          title
        }
      ] );
  };
  const removeTodo = id => {
    const todo = todos.find(t => t.id === id);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены что хотете удалить элемент "${todo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter( todo => todo.id !== id )); 
          }
        },
      ],
      {cancelable: false},
    );
  };
  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
        if(todo.id === id) {
          todo.title = title
        }
        return todo
      }));
  };

  let content = (
    <MainScreen 
      todos={todos}
      addTodo={addTodo} 
      removeTodo={removeTodo}
      openTodo={setTodoId}
      />
  );

  if(todoId) {
    const selectedTodo = todos.find(todo => todoId === todo.id); 
    content = <TodoScreen
                onRemove={removeTodo}
                goBack={() => setTodoId(null)}
                todo={selectedTodo}
                onSave={updateTodo}
              />
  }

  return (
    <View>
      <NavBar title="Todo App"/>
      <View style={styles.container}>{ content }</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
