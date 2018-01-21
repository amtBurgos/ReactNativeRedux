import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableHighlight, Button } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { changePrimaryColorAction, changeItemTextColorAction } from '../actions/settings';

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

const Settings = ({ primaryColor = '', itemTextColor = '', onChangeItemTextColor = () => {} }) => (
  <TouchableHighlight style={styles.container}>
    <Button
      onPress={() => onChangeItemTextColor(getRandomColor())}
      onLongPress={() => {}}
      title="Change Text Color"
      color="blue"
      accessibilityLabel="Change Text Color"
    />
  </TouchableHighlight>
);

const mapStateToProps = ({ settings }) => {
  const { primaryColor, itemTextColor } = settings;
  return { primaryColor, itemTextColor };
};

const mapDispatchToProps = dispatch => ({
  onChangeItemTextColor: (color) => {
    dispatch(changeItemTextColorAction(color));
  },
  onChangePrimaryColorAction: (color) => {
    dispatch(changePrimaryColorAction(color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
