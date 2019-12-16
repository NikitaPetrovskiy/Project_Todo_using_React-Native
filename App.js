import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavBar } from './src/NavBar';
import { AddTodo } from './src/AddTodo';

export default function App() {
  return (
    <View>
      <NavBar title="Todo App"/>
      <View style={styles.container}>
        <AddTodo /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
