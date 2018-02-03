import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Button,
  Modal,
  StatusBar,
  View,
  TouchableHighlight,
} from 'react-native';
import FloatActionButton from 'react-native-action-button';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Actions } from 'react-native-router-flux';
import Item from '../components/item/item';
import Card from '../components/card/card';
import EditItem from '../components/editItem/editItem';
import { displayModalAction } from '../actions/main';
import { changeItemTextColorAction } from '../actions/settings';
import { getRandomColor } from '../util/util';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
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
  itemEdited = '',
  primaryColor = 'blue',
  onOpenModal = () => {},
  onChangeItemTextColor = () => {},
}) => {
  // const listItems = items.map(item => <Item key={item.id} item={item} />);
  const listItems = items.map(item => (
    <Card key={item.id} title={item.value} description="Description" />
  ));

  return (
    <View>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
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

        <TouchableHighlight style={styles.container}>
          <Button
            onLongPress={() => {}}
            color="blue"
            title="Change Text Color"
            accessibilityLabel="Change Text Color"
            onPress={() => onChangeItemTextColor(getRandomColor())}
          />
        </TouchableHighlight>
        {listItems}
      </ScrollView>
      <FloatActionButton
        buttonColor={primaryColor}
        degrees={0}
        offsetX={40}
        offsetY={40}
        onPress={() => onOpenModal(true)}
      >
        <IconMaterial name="plus" />
      </FloatActionButton>
    </View>
  );
};

const mapStateToProps = ({ main, settings }) => {
  const { items, displayModal, itemEdited } = main;
  const { primaryColor } = settings;
  return {
    items,
    displayModal,
    itemEdited,
    primaryColor,
  };
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
