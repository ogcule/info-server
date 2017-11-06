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
    <div className={styles.formContainer}>
      <CloseFormBtn closeForm={props.closeForm} />
      <form method="post" >
        <section>
          <label htmlFor="rcgp">
            Category (RCGP)
            <select id="rcgp" name="catrcgp">
              {rcgpCurriculum.map(heading => (
                <option key={Object.keys(heading)[0]}>{heading[Object.keys(heading)[0]]}
                </option>))}
            </select>
            <label htmlFor="category">
              Category
              <select id="category" name="category">
                {categories.map(category => <option>{category}</option>)}
              </select>
            </label>
          </label>
        </section>
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
