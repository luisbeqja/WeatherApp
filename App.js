import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Header } from './components/header/Header';
import { Fragment } from 'react';
import { Events } from './components/events/Events';
import { EventsItem } from './components/events/EventsItem';

export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#6E5BFA' }} />
      <View style={{ backgroundColor: '#1E1E1E', flex: 1 }}>
        <Header />
        <ScrollView style={{ backgroundColor: '#1E1E1E', }}>
          <View style={styles.container}>
            <Events />
            <EventsItem imageSize={72} isMainEvent={true} imagePath={require('./assets/EventTest.png')} width='100%' />
            <EventsItem imageSize={32} isMainEvent={false} imagePath={require('./assets/EventTest2.png')} width='90%' />
            <EventsItem imageSize={32} isMainEvent={false} imagePath={require('./assets/EventTest3.png')} width='90%' />
            <EventsItem imageSize={32} isMainEvent={false} imagePath={require('./assets/EventTest.png')} width='90%' />
            <EventsItem imageSize={32} isMainEvent={false} imagePath={require('./assets/EventTest2.png')} width='90%' />
            <Text style={{ fontSize: 15, color: '#fff', marginTop: 30 }}>MORE EVENTS</Text>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </View>
    </Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 25,
    paddingBottom: 45,
  },
});
