import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { NavBar } from './components/NavBar';
import { THEME } from './theme';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext);

    return (
        <View style={styles.wrapper}>
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
      flex: 1
    },
    wrapper: {
      flex: 1
    }
  });
