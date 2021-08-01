import React, { FC } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export const ScreenContainer: FC = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    {children}
  </SafeAreaView>
);
