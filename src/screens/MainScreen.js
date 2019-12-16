import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo }) => {
    return (
        <View>
        <AddTodo onSubmit={addTodo} />
        <FlatList 
        data={todos}
        keyExtractor={ item => item.id.toString() }
        renderItem={({item}) => ( <Todo todo={item} onRemove={removeTodo} /> )}
        />
        </View>
    );
};

const style = StyleSheet.create({});
