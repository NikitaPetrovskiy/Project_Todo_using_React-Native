import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { NavBar } from './src/components/NavBar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState('2');
  const [todos, setTodos] = useState([
    {id: '1', title: 'Выучить React Native'},
    {id: '2', title: 'Написать приложение'}
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
