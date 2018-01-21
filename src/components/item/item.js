import React from 'react';
// import { Router, Scene, Tabs } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { displayModalAction, changeItemEdited } from '../../actions/main';

const style = {
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 15,
    borderWidth: 1,
  },
  container: {
    width: 100,
    alignContent: 'center',
  },
};

const Item = ({
  item = { id: -1, value: '' },
  color = 'blue',
  onPressItem = () => {},
  onLongPress = () => {},
}) => {
  const styles = StyleSheet.create({ text: { ...style.text, color, borderColor: color } });
  return (
    <View style={style.container}>
      <Text onPress={() => onPressItem(item)} style={styles.text}>
        {item.value}
      </Text>
    </View>
  );
};

const mapStateToProps = ({ settings }, ownProps) => ({
  item: ownProps.item,
  color: settings.itemTextColor,
});

const mapDispatchToProps = dispatch => ({
  onPressItem: (item) => {
    dispatch(changeItemEdited(item));
    dispatch(displayModalAction(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
