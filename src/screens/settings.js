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

const Settings = ({ text = '' }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
);

const mapStateToProps = ({ settings }) => {
  const { text } = settings;
  return { text };
};

// const mapDispatchToProps = dispatch => ({
//   OnChangeText: () => {
//     dispatch(changeText());
//   },
// });

// Settings.propTypes = {
//   text: PropTypes.string.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Settings);
export default connect(mapStateToProps)(Settings);
