import React from 'react';
import { View, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.containerStyle} >
      <Image
        style={styles.logoStyle}
        source={require('../../img/round-logo.png')}
      />
    </View>
  )
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    borderTopColor: 'black',
    borderTopWidth: 3,
    padding: 3,
    backgroundColor: 'black',
  },
  logoStyle: {
    height: 50,
    width: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  }
}

export {Footer};
