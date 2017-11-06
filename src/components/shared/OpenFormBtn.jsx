import React from 'react';
import PropTypes from 'prop-types';
import styles from './shared.scss';

const OpenFormBtn = props => (
  <div className={styles.add}>
    <p><button onClick={props.openForm}>+</button> {props.text}</p>
  </div>
);

OpenFormBtn.propTypes = {
  openForm: PropTypes.func,
  text: PropTypes.string,
};
OpenFormBtn.defaultProps = {
  openForm: null,
  text: null,
};
export default OpenFormBtn;
