import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';

function Home(props) {
  return (
    <div>
      <h1 className={styles.heading}>Hello {props.name}</h1>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: 'Stranger',
};

export default Home;
