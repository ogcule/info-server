import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import Subtitle from './../shared/Subtitle';
import ServicesTable from './ServicesTable';
import OpenFormBtn from './../shared/OpenFormBtn';
import ServiceForm from './ServiceForm';

const ServicesPage = props => (
  <div className={styles.servicesBox}>
    <Subtitle subtitle="Services" />
    <ServicesTable
      allServices={props.allServices}
      loaded={props.loaded}
    />
    {!props.expanded ? <OpenFormBtn text="Add Service" openForm={props.handleFormChange} />
                            : <ServiceForm
                              closeForm={props.handleFormChange}
                            />
    }
  </div>
);
ServicesPage.propTypes = {
  loaded: PropTypes.bool,
  allServices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.number,
    address: PropTypes.string,
  })),
  handleFormChange: PropTypes.func,
  expanded: PropTypes.bool,
};
ServicesPage.defaultProps = {
  loaded: false,
  allServices: null,
  handleFormChange: null,
  expanded: false,
};
export default ServicesPage;
