import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { changeItemTextColor } from '../actions/settings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const colorList = ['#4caf50', '#00bcd4', '#9c27b0', '#f44336', '#fb8c00', '#d50000'];

const getRandomColor = () => colorList[Math.floor(Math.random() * colorList.length)];

const Settings = ({ text = '', onChangeItemTextColor = () => {} }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
    <Button
      onPress={() => onChangeItemTextColor(getRandomColor())}
      onLongPress={() => {}}
      title="Change Text Color"
      color="blue"
      accessibilityLabel="Change Text Color"
    />
  </View>
);

const mapStateToProps = ({ settings }) => {
  const { text } = settings;
  return { text };
};

const mapDispatchToProps = dispatch => ({
  onChangeItemTextColor: (color) => {
    dispatch(changeItemTextColor(color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
