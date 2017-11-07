import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';
import CloseFormBtn from './../shared/CloseFormBtn';

const ServiceForm = (props) => {
  const categories = [
    'Community',
    'Dentists',
    'Drugs and Alcohol',
    'GP services',
    'Maternity',
    'Mental Health',
    'Opticians',
    'Pharmacies',
    'Urgent and Emergency Care',
  ];
  const rcgpCurriculum = [
    { 1: 'Healthy People' },
    { 2: 'Genetics in Primary Care' },
    { 3: 'Care of Acutely Ill People' },
    { 4: 'Care of Children and Young People' },
    { 5: 'Care of Older Adults' },
    { 6: 'Women\'s Health' },
    { 7: 'Men\'s Health' },
    { 8: 'Sexual Health' },
    { 9: 'End-of-Life Care' },
    { 10: 'Care of People with Mental Health Problems' },
    { 11: 'Care of People with Intellectual Disability' },
    { 12: 'Cardiovascular Health' },
    { 13: 'Digestive Health' },
    { 14: 'Care of People who Misuse Drugs and Alcohol' },
    { 15: 'Care of People with ENT, Oral and Facial Problems' },
    { 16: 'Care of People with Eye Problems' },
    { 17: 'Care of People with Metabolic Problems' },
    { 18: 'Care of People with Neurological Problems' },
    { 19: 'Respiratory Health' },
    { 20: 'Care of People with Musculoskeletal Problems' },
    { 21: 'Care of People with Skin Problems' },
  ];
  return (
    <div className={styles.formContainerServices}>
      <CloseFormBtn closeForm={props.closeForm} />
      <form method="post" onSubmit={props.handleSubmit} >
        <legend>Add a service</legend>
          <label htmlFor="rcgp">
            Category (RCGP):
            <select id="rcgp" name="rcgpCategory" value={props.valueRcgpCategory} onChange={props.handleInputChange}>
              {rcgpCurriculum.map(heading => (
                <option key={Object.keys(heading)[0]} value={heading[Object.keys(heading)[0]]}>
                  {heading[Object.keys(heading)[0]]}
                </option>))}
            </select>
          </label>
          <label htmlFor="category">
              Category:
              <select id="category" value={props.valueCategory} name="category" onChange={props.handleInputChange}>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>))}
              </select>
          </label>
          <label htmlFor="name">
            Name of Service:
            <input id="name" name="name" type="text" value={props.valueName} onChange={props.handleInputChange} />
          </label>
          <label htmlFor="description">
            Description of Service:
            <textarea id="description" name="description" type="text" value={props.valueDescription} onChange={props.handleInputChange} />
          </label>
          <label htmlFor="address">
            Address:
            <textarea id="address" name="address" type="text" value={props.valueAddress} onChange={props.handleInputChange} />
          </label>
          <label htmlFor="telephone">
            Telephone:
            <input id="telephone" name="telephone" type="tel" value={props.valueTelephone} onChange={props.handleInputChange} />
          </label>
          <label htmlFor="email">
          E-mail:
            <input id="email" type="email" name="email" value={props.valueEmail} onChange={props.handleInputChange} />
          </label>
          <label htmlFor="weblink">
          Web address:
            <input id="weblink" type="url" name="weblink" value={props.valueWeblink} onChange={props.handleInputChange} />
          </label>
          <label htmlFor="image">
          URL of image:
            <input id="image" type="url" name="image" value={props.valueImage} onChange={props.handleInputChange} />
          </label>

          <div className={styles.formBtn}>
            <button type="submit" >Submit</button>
          </div>
      </form>
    </div>
  );
};

ServiceForm.propTypes = {
  closeForm: PropTypes.func,
};
ServiceForm.defaultProps = {
  closeForm: null,
};
export default ServiceForm;
