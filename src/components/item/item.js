import React from 'react';
// import { Router, Scene, Tabs } from 'react-native-router-flux';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { displayModalAction, changeItemEdited } from '../../actions/main';
import itemStyle from './itemStyle';

const Item = ({
  item = { id: -1, value: '' },
  color = 'blue',
  styleType = 'list',
  onPressItem = () => {},
  onLongPress = () => {},
}) => {
  let style;
  if (styleType === 'list') {
    style = itemStyle.list;
  } else if (styleType === 'square') {
    style = itemStyle.square;
  }

  const styles = StyleSheet.create({
    ...style,
    text: { ...style.text, color },
  });

  // onPress={() => onPressItem(item)}
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
      useForeground
    >
      <View style={styles.container}>
        <Text style={styles.text}>{item.value}</Text>
      </View>
    </TouchableNativeFeedback>
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
