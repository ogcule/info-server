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
    {!props.expanded ? <OpenFormBtn text="Add Service" openForm={props.handleFormChange} />
                            : <ServiceForm
                              closeForm={props.handleFormChange}
                              handleInputChange={props.handleInputChange}
                              handleSubmit={props.handleSubmit}
                              valueImage={props.valueImage}
                              valueName={props.valueName}
                              valueCategory={props.valueCategory}
                              valueRcgpCategory={props.valueRcgpCategory}
                              valueDescription={props.valueDescription}
                              valueAddress={props.valueAddress}
                              valueTelephone={props.valueTelephone}
                              valueEmail={props.valueEmail}
                              valueWeblink={props.valueWeblink}
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
  handleSubmit: PropTypes.func,
  expanded: PropTypes.bool,
  valueName: PropTypes.string,
};
ServicesPage.defaultProps = {
  loaded: false,
  allServices: null,
  handleFormChange: null,
  handleSubmit: null,
  expanded: false,
  valueName: '',
};
export default ServicesPage;
