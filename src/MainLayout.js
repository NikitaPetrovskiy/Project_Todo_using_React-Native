import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import { NavBar } from './components/NavBar';
import { THEME } from './theme';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext);

    // const removeTodo = id => {
    //     const todo = todos.find(t => t.id === id);
    //     Alert.alert( 
    //       'Удаление элемента',
    //       `Вы уверены что хотете удалить элемент "${todo.title}"?`,
    //       [
    //         {
    //           text: 'Отмена',
    //           style: 'cancel',
    //         },
    //         {
    //           text: 'Удалить',
    //           style: 'destructive',
    //           onPress: () => {
    //             setTodoId(null);
    //             setTodos(prev => prev.filter( todo => todo.id !== id )); 
    //           }
    //         },
    //       ],
    //       {cancelable: false},
    //     );
    // };

    return (
        <View>
            <NavBar title="Todo App" />
            <View style={styles.container}>
              { todoId ? <TodoScreen /> : <MainScreen /> }
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: THEME.PADDING_VERTICAL,
    }
  });
