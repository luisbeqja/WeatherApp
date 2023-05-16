import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const EventsItem = (props: any) => {
  return (
    <View style={[styles.container, { width: props.width }]}>
      <Image
        style={{
          width: props.imageSize,
          resizeMode: 'contain',
          height: props.imageSize,
        }}
        source={props.imagePath}
      />
      <View
        style={{
          marginLeft: 17,
          width: '100%',
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: '#1E1E1E',
            textAlign: 'left',
          }}
        >
          Concerto Gratuito Purdue University W.E. & La Filarmonica, Junior Band
        </Text>
        {props.isMainEvent && (
          <Text
            style={{
              fontSize: 10,
              color: '#1E1E1E',
              textAlign: 'left',
              marginTop: 10,
            }}
          >
            Wed, May 24, 8:00 PM
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 7,
    paddingRight: 25,
  },
});
