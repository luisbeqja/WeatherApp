import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Header } from './components/header/Header';
import { Fragment } from 'react';
export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#6E5BFA' }} />
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    width: '100%',
  },
});
