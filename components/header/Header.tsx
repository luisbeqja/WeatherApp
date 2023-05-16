import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Pencil from '../../assets/Pencil.svg';
import Reload from '../../assets/Reload.svg';
import { HeaderInfo } from './HeaderInfo';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Reload />
        <Text style={styles.title}>ANTWERP</Text>
        <Pencil />
      </View>
      <View style={styles.containerWeather}>
        <Text style={{ fontSize: 64, color: 'white' }}>20°</Text>
        <Image
          style={{ width: 152, resizeMode: 'contain', height: 160 }}
          source={require('../../assets/30.png')}
        />
      </View>
      <HeaderInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingHorizontal: 25,
    backgroundColor: '#6E5BFA',
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
    shadowColor: '#000',
    alignItems: 'center',
    shadowOffset: {
      width: 12,
      height: 11,
    },
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  containerWeather: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
