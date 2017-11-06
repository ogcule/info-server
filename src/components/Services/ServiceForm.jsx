import React from 'react';
import PropTypes from 'prop-types';
import CloseFormBtn from './../shared/CloseFormBtn';

const ServiceForm = (props) => {
  const rcgpCurriculum = [
    { 1: 'Healthy People'},
    { 2: 'Genetics in Primary Care'},
    { 3: 'Care of Acutely Ill People'},
    { 8: 'Sexual Health'},
    { 12: 'Cardiovascular Health'},
    { 13: 'Digestive Health'},
    { 19: 'Respiratory Health'},
    { 16: 'Care of People with Eye Problems'},
    { 17: 'Care of People with Metabolic Problems'},
    { 18: 'Care of People with Neurological Problems'},
    { 20: 'Care of People with Musculoskeletal Problems'},
    { 15: 'Care of People with ENT, Oral and Facial Problems'},
    { 4: 'Care of Children and Young People'},
    { 5: 'Care of Older Adults'},
    { 6: `Women's Health` },
    { 7: `Men's Health` },
    { 9: `End-of-Life Care` },
    { 10: 'Care of People with Mental Health Problems'},
    { 11: 'Care of People with Intellectual Disability'},
    { 14: 'Care of People who Misuse Drugs and Alcohol'},
    { 21: 'Care of People with Skin Problems'}
  ];
return (
  <ul>
    <CloseFormBtn closeForm={props.closeForm} />
  {rcgpCurriculum.map(heading => <li>{heading}</li>)}
</ul>
)};

ServiceForm.propTypes = {
  closeForm: PropTypes.func,
};
ServiceForm.defaultProps = {
  closeForm: null,
};
export default ServiceForm;
