import React from 'react';
// import { Router, Scene, Tabs } from 'react-native-router-flux';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

const style = {
  text: {
    fontSize: 16,
    textAlign: 'left',
    margin: 12,
  },
};

const Item = ({
  text = '', color = 'blue', onPress = () => {}, onLongPress = () => {},
}) => {
  const styles = StyleSheet.create({ text: { ...style.text, color } });
  return <Text style={styles.text}>{text}</Text>;
};

const mapStateToProps = ({ settings }, ownProps) => ({
  text: ownProps.text,
  color: settings.itemTextColor,
});

export default connect(mapStateToProps)(Item);
