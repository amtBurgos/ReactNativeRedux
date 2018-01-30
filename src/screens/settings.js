import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableHighlight, Button } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { changePrimaryColorAction } from '../actions/settings';
import { getRandomColor } from '../util/util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Settings = ({ onChangePrimaryColor = () => {} }) => (
  <TouchableHighlight style={styles.container}>
    <Button
      onLongPress={() => {}}
      color="blue"
      title="Change Primary Color"
      accessibilityLabel="Change Primary Color"
      onPress={() => onChangePrimaryColor(getRandomColor())}
    />
  </TouchableHighlight>
);

const mapStateToProps = ({ settings }) => {
  const { primaryColor, itemTextColor } = settings;
  return { primaryColor, itemTextColor };
};

const mapDispatchToProps = dispatch => ({
  onChangePrimaryColor: (color) => {
    dispatch(changePrimaryColorAction(color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
