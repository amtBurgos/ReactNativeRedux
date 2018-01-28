import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => onPressItem(item)}>
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
