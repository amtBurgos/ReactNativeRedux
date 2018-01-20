import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, Image } from 'react-native';
import SvgUrifrom from 'react-native-svg-uri';

const Icon = ({ color = '#000000', icon = '', onClick = function () {} }) => ({
  // <Image />
});
const mapStateToProps = ({ common }, ownProps) => {
  const color = ownProps.color === undefined ? common.primaryColor : ownProps.color;
  return { color };
};

const mapDispatchToProps = (dispatch) => {};

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

// export default connect(mapStateToProps, mapDispatchToProps)(Icon);
export default connect(mapStateToProps)(Icon);
