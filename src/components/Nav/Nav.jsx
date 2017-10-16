import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Topics from './../Topics/Topics';
import styles from './Nav.scss';

const NotFound = ({ location }) => (
  <h1>404.. Can not find page
    <code>
      {location.pathname}
    </code>!
  </h1>
);

const Nav = () => (
  <Router>
    <div>
      <nav className={styles.nav}>
        <header className="title">Information Portal</header>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName={styles.selected}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={styles.selected}>About</NavLink>
          </li>
          <li>
            <NavLink to="/topics" activeClassName={styles.selected}>Topics</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route component={NotFound} />
      </Switch>
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

export default Nav;
