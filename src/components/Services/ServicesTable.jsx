import React from 'react';
import PropTypes from 'prop-types';
import styles from './services.scss';

const ServicesTable = props => {
  if (!props.loaded) {
    return <p>.....Loading</p>;
  }
return (
<table>
  <thead>
  <tr>
    <th>Image</th>
    <th>Service</th>
    <th>Contact details</th>
    <th>Category</th>
  </tr>
</thead>
<tbody>
  {props.allServices.map((obj) => {
    const { id, name, category, description, image, link, email, telephone, address } = obj;
    return (
      <tr key={id} data-id={id}>
        <td>{image}</td>
        <td>
          <ul>
            <li>{name}</li>
            <li>{description}</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Address: {address}</li>
            <li>Telephone: {telephone}</li>
            <li>Email: {email}</li>
            <li>Web: {link}</li>
          </ul>
        </td>
        <td>{category}</td>
      </tr>
    )
  })}
</tbody>
</table>
);
};
ServicesTable.propTypes = {
  loaded: PropTypes.bool,
};
ServicesTable.defaultProps = {
  loaded: false,
};

export default ServicesTable;
