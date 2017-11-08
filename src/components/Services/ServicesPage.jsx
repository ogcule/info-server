import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import Subtitle from './../shared/Subtitle';
import ServicesTable from './ServicesTable';
import OpenFormBtn from './../shared/OpenFormBtn';
import ServiceForm from './ServiceForm';
import SuccessMessage from './../shared/SuccessMessage';

const ServicesPage = props => (
  <div className={styles.servicesBox}>
    <Subtitle subtitle="Services" />
    {props.message && <SuccessMessage />}
    {!props.expanded ? <OpenFormBtn text="Add Service" openForm={props.handleFormChange} />
                            : <ServiceForm
                              closeForm={props.handleFormChange}
                              handleInputChange={props.handleInputChange}
                              handleSubmit={props.handleSubmit}
                              values={props.values}
                              errorMsg={props.errorMsg}
                            />
    }
    <ServicesTable
      allServices={props.allServices}
      loaded={props.loaded}
    />
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
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.string),
  expanded: PropTypes.bool,
  message: PropTypes.bool,

};
ServicesPage.defaultProps = {
  loaded: false,
  allServices: null,
  handleFormChange: null,
  handleInputChange: null,
  handleSubmit: null,
  expanded: false,
  values: {},
  message: false,
};
export default ServicesPage;
