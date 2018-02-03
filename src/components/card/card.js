import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-material-design';

const style = {
  container: {
    flex: 1,
    // height: 250,
    margin: 10,
    elevation: 2,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    height: 20,
    fontSize: 15,
    fontWeigth: 'bold',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'white',
  },
};

// const styles = StyleSheet.create(style);

const Card = ({
  title = '',
  description = '',
  onPressFirstButton = () => {},
  onPressSecondButton = () => {},
}) => (
  <View style={style.container}>
    <Text>{title}</Text>
    <Text>{description}</Text>
    <View style={style.buttonContainer}>
      <Button
        backgroundcolor="#efefef"
        textColor="#000"
        value="Edit"
        onPress={onPressFirstButton}
      />
      <Button
        backgroundcolor="#efefef"
        textColor="#000"
        value="Delete"
        onPress={onPressSecondButton}
      />
    </View>
  </View>
);

export default Card;
