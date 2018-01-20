import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { keyGen } from '../util/util';
import { changeText } from '../actions/main';
import Item from '../components/item/item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

const Main = ({
  text = '',
  items = [{ id: 'example', value: 'Example' }],
  OnChangeText = () => {},
}) => {
  const listItems = items.map(item => <Item text={item.value} key={item.key} />);
  // const listItems = <Text>TWO</Text>;
  return (
    <View style={styles.container}>
      {/* <Text onPress={() => OnChangeText()}>{text}</Text> */}
      {listItems}
    </View>
  );
};

const mapStateToProps = ({ main }) => {
  const { text, items } = main;
  return { text, items };
};

const mapDispatchToProps = dispatch => ({
  OnChangeText: () => {
    dispatch(changeText());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
