import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableHighlight, Button } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { changePrimaryColorAction, changeItemTextColorAction } from '../actions/settings';
import { getRandomColor } from '../util/util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
