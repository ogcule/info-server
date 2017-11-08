import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import CloseFormBtn from './../shared/CloseFormBtn';
import { categories, rcgpCurriculum } from './../../data/categories';

const ServiceForm = props => (
  <div className={styles.formContainerServices}>
    <CloseFormBtn closeForm={props.closeForm} />
    <form method="post" onSubmit={props.handleSubmit} noValidate>
      <legend>Add a service</legend>
      <p className={styles.required}>* Required</p>
      <label htmlFor="rcgp">
        <span className={styles.required}>*</span> Category (RCGP):
        <select id="rcgp" name="rcgpCategory" value={props.valueRcgpCategory} onChange={props.handleInputChange}>
          {rcgpCurriculum.map(heading => (
            <option key={Object.keys(heading)[0]} value={heading[Object.keys(heading)[0]]}>
              {heading[Object.keys(heading)[0]]}
            </option>))}
        </select>
      </label>
      <label htmlFor="category">
           <span className={styles.required}>*</span> Category:
          <select id="category" value={props.valueCategory} name="category" onChange={props.handleInputChange}>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>))}
          </select>
      </label>
      <label htmlFor="name">
        <span className={styles.required}>*</span> Name of Service:
        <input id="name" name="name" type="text" value={props.valueName} onChange={props.handleInputChange} />
      </label>
      <label htmlFor="description">
        <span className={styles.required}>*</span> Description of Service:
        <textarea id="description" name="description" type="text" value={props.valueDescription} onChange={props.handleInputChange} />
      </label>
      <label htmlFor="address">
        Address:
        <textarea id="address" name="address" type="text" value={props.valueAddress} onChange={props.handleInputChange} />
      </label>
      <label htmlFor="postcode">
        Postcode:
        <input id="postcode" name="postcode" type="text" value={props.valuePostcode} onChange={props.handleInputChange} />
      </label>
      <label htmlFor="telephone">
        <span className={styles.required}>*</span> Telephone:
        <input id="telephone" name="telephone" type="tel" value={props.valueTelephone} onChange={props.handleInputChange} />
      </label>
      <label htmlFor="email">
        E-mail:
        <input id="email" type="email" name="email" value={props.valueEmail} placeholder="user@mydomain.com" onChange={props.handleInputChange} />
      </label>
      <label htmlFor="weblink">
        Web address:
        <input id="weblink" type="url" name="weblink" value={props.valueWeblink} placeholder="https://www.servicewebsite.com" onChange={props.handleInputChange} />
      </label>
      <label htmlFor="image">
        URL of image:
        <input id="image" type="url" name="image" value={props.valueImage} placeholder="https://link-to-related-image.com" onChange={props.handleInputChange} />
      </label>

      <div className={styles.formBtn}>
        <button type="submit" >Submit</button>
      </div>
    </form>
  </div>
);
ServiceForm.propTypes = {
  closeForm: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  valueName: PropTypes.string,
  valueImage: PropTypes.string,
  valueCategory: PropTypes.string,
  valueRcgpCategory: PropTypes.string,
  valueDescription: PropTypes.string,
  valueAddress: PropTypes.string,
  valueTelephone: PropTypes.string,
  valueEmail: PropTypes.string,
  valueWeblink: PropTypes.string,
  valuePostcode: PropTypes.string,
};
ServiceForm.defaultProps = {
  closeForm: null,
  handleSubmit: null,
  handleInputChange: null,
  valueName: '',
  valueImage: '',
  valueCategory: '',
  valueRcgpCategory: '',
  valueDescription: '',
  valueAddress: '',
  valueTelephone: '',
  valueEmail: '',
  valueWeblink: '',
  valuePostcode: '',
};
export default ServiceForm;
