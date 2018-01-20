import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { changeText } from '../actions/main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = ({ text = '', OnChangeText = function () {} }) => (
  <View style={styles.container}>
    <Text onPress={() => OnChangeText()}>{text}</Text>
  </View>
);

const mapStateToProps = ({ main }) => {
  const { text } = main;
  return { text };
};

const mapDispatchToProps = dispatch => ({
  OnChangeText: () => {
    dispatch(changeText());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
