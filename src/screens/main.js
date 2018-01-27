import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Button, Modal, TouchableHighlight } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import Item from '../components/item/item';
import EditItem from '../components/editItem/editItem';
import { displayModalAction } from '../actions/main';
import { changeItemTextColorAction } from '../actions/settings';
import { getRandomColor } from '../util/util';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(0,0,0)',
  },
});

const Main = ({
  items = [{ id: 'example', value: 'Example' }],
  displayModal = false,
  itemEdited,
  onOpenModal = () => {},
  onChangeItemTextColor = () => {},
}) => {
  const listItems = items.map(item => <Item key={item.id} item={item} />);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Modal
        animationType="slide"
        visible={displayModal}
        contentContainerStyle={styles.modalContainer}
        onRequestClose={() => onOpenModal(false)}
      >
        <EditItem
          onSave={() => onOpenModal(false)}
          onCancel={() => onOpenModal(false)}
          item={itemEdited}
        />
      </Modal>
      <TouchableHighlight>
        <Button title="Add to list" onPress={() => onOpenModal(true)} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.container}>
        <Button
          onPress={() => onChangeItemTextColor(getRandomColor())}
          onLongPress={() => {}}
          title="Change Text Color"
          color="blue"
          accessibilityLabel="Change Text Color"
        />
      </TouchableHighlight>
      {listItems}
    </ScrollView>
  );
};

const mapStateToProps = ({ main }) => {
  const { items, displayModal, itemEdited } = main;
  return { items, displayModal, itemEdited };
};

const mapDispatchToProps = dispatch => ({
  onOpenModal: (displayModal) => {
    dispatch(displayModalAction(displayModal));
  },
  onChangeItemTextColor: (color) => {
    dispatch(changeItemTextColorAction(color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
