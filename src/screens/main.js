import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import Item from '../components/item/item';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = ({ items = [{ id: 'example', value: 'Example' }] }) => {
  const listItems = items.map(item => <Item key={item.key} text={item.value} />);
  return <ScrollView contentContainerStyle={styles.container}>{listItems}</ScrollView>;
};

const mapStateToProps = ({ main }) => {
  const { items } = main;
  return { items };
};

export default connect(mapStateToProps)(Main);
