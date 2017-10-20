import React from 'react';
import PropTypes from 'prop-types';
import styles from './faq.scss';

const DisplayFaq = props => (
  <ul className={styles.displayFaq}>
    {props.allFaq.map((obj) => {
      const { id, question, answer } = obj;
      return (
        <ul key={id} data-id={id}>
          <li className={styles.liHeading}>{question}</li>
          <li className={styles.liAnswer}>{answer}</li>
        </ul>
    );
  })}
  </ul>
);

DisplayFaq.propTypes = {
  allFaq: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
  })),
};
DisplayFaq.defaultProps = {
  allFaq: [{ id: 0, question: 'What happens if there is an error getting your information?', answer: 'You get this message' }],
};
export default DisplayFaq;
