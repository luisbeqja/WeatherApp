import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Events = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center' }}>
        Today's weather report: It's raining cats and dogs!
      </Text>
      <Text
        style={{
          fontSize: 11,
          color: '#fff',
          textAlign: 'center',
          fontWeight: '300',
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Wednesday, 26 April
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
});
