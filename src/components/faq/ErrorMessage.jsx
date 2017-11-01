import React from 'react';
import styles from './faq.scss';

const ErrorMsg = props => <p className={styles.errorText}>{props.msg}</p>;

export default ErrorMsg;
