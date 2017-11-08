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
                              valuePostcode={props.valuePostcode}
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
  expanded: PropTypes.bool,
  valueName: PropTypes.string,
  valueImage: PropTypes.string,
  valueCategory: PropTypes.string,
  valueRcgpCategory: PropTypes.string,
  valueDescription: PropTypes.string,
  valueAddress: PropTypes.string,
  valueTelephone: PropTypes.number,
  valueEmail: PropTypes.string,
  valueWeblink: PropTypes.string,
  valuePostcode: PropTypes.string,
};
ServicesPage.defaultProps = {
  loaded: false,
  allServices: null,
  handleFormChange: null,
  handleInputChange: null,
  handleSubmit: null,
  expanded: false,
  valueName: '',
  valueImage: '',
  valueCategory: '',
  valueRcgpCategory: '',
  valueDescription: '',
  valueAddress: '',
  valueTelephone: '',
  valueEmail: '',
  valueWeblink: '',
  valuePostcode: ''
};
export default ServicesPage;
