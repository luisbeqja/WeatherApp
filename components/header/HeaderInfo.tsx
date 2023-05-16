import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HeaderInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>9km/h</Text>
      <Text style={styles.text}>87%</Text>
      <Text style={styles.text}>18km</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 52,
    width: '100%',
    backgroundColor: '#1E1E1E',
    marginBottom: 25,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
