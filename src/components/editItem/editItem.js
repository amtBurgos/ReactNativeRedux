import React, { Component } from 'react';
// import { Router, Scene, Tabs } from 'react-native-router-flux';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { keyGen } from '../../util/util';
import { saveItem } from '../../actions/main';

// const style = {
//   text: {
//     fontSize: 16,
//     textAlign: 'left',
//     margin: 12,
//   },
// };
// const styles = StyleSheet.create({ text: { ...style.text, color } });

class EditItem extends Component {
  // ({ item = { id: -1, value: '' }, onSave = () => {}, onCancel = () => {} })
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      onSave: props.onSave,
      onCancel: props.onCancel,
      textWrited: '',
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(value) {
    this.setState({ ...this.state, textWrited: value });
  }

  render() {
    return (
      <View>
        <TextInput
          defaultValue={this.state.item.value}
          numberOfLines={5}
          placeholder="Type something!"
          onChangeText={valueChanged => this.changeText(valueChanged)}
        />
        <Button
          title="Save"
          onPress={() => this.state.onSave(this.state.item.id, this.state.textWrited)}
        />
        <Button title="Cancel" onPress={() => this.state.onCancel()} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: (id, value, saveType) => {
    dispatch(saveItem(id, value, saveType));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  item: ownProps.item,
  dispatchProps,
  onSave: (id, value) => {
    ownProps.onSave();
    if (ownProps.item.id === -1) {
      dispatchProps.onSave(keyGen(), value, 'ADD');
    } else {
      dispatchProps.onSave(id, value, 'CHANGE');
    }
  },
  onCancel: ownProps.onCancel,
});

export default connect(() => ({}), mapDispatchToProps, mergeProps)(EditItem);
