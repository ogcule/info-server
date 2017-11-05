// routes component
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ServicesContainer from './../Services/containers/ServicesContainer';
import Home from './../Home/Home';
import FaqContainer from './../faq/containers/FaqContainer';
import Title from './Title';
import styles from './App.scss';

const NotFound = ({ location }) => (
  <h1>404.. Can not find page
    <code>
      {location.pathname}
    </code>!
  </h1>
);

const App = () => (
  <Router>
    <div className={styles.container}>
      <Title />
      <div className={styles.innerContainer}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={ServicesContainer} />
          <Route path="/faq" component={FaqContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

NotFound.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }),
};

NotFound.defaultProps = {
  location: {
    pathname: '',
  },
};

export default App;
