import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';

function Services(props) {
  return (
    <div>
      <h1 className={styles.heading}>Services for my {props.name}</h1>
    </div>
  );
}

Services.propTypes = {
  name: PropTypes.string,
};

Services.defaultProps = {
  name: 'Friend',
};

export default Services;
