import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Button, Modal, TouchableHighlight } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import Item from '../components/item/item';
import { displayModalAction } from '../actions/main';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = ({
  items = [{ id: 'example', value: 'Example' }],
  displayModal = false,
  onOpenModal = () => {},
}) => {
  const listItems = items.map(item => <Item key={item.id} text={item.value} />);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Modal animationType="fade" visible={displayModal} onRequestClose={() => onOpenModal(false)}>
        <Button title="Close Modal" onPress={() => onOpenModal(false)} />
      </Modal>
      <TouchableHighlight>
        <Button title="Open Modal" onPress={() => onOpenModal(true)} />
      </TouchableHighlight>
      {listItems}
    </ScrollView>
  );
};

const mapStateToProps = ({ main }) => {
  const { items, displayModal } = main;
  return { items, displayModal };
};

const mapDispatchToProps = dispatch => ({
  onOpenModal: (displayModal) => {
    dispatch(displayModalAction(displayModal));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
