import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const Minus = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>

      <Image
        style={styles.logoStyle}
        source={require('../../img/minus.png')}
      />
    </TouchableOpacity>
  );
};

const styles = {
  logoStyle: {

  },
  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 10,
    borderWidth: 3,
    marginLeft: 5,
    marginRight: 5,
    flexGrow: 1,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
};

export { Minus };
