import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Maps = ({ text = '' }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
);

const mapStateToProps = ({ maps }) => {
  const { text } = maps;
  return { text };
};

// const mapDispatchToProps = dispatch => ({
//   OnChangeText: () => {
//     dispatch(changeText());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Settings);
export default connect(mapStateToProps)(Maps);
