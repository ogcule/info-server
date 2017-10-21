import React from 'react';
import PropTypes from 'prop-types';
import styles from './faq.scss';

const AddMessage = () => <li>Thank you for adding a new entry</li>;
const Questions = (props) => {
  if (!props.loaded) {
    return <p>.....Loading</p>;
  }
  return (
    <ul className={styles.questions}>
      {props.messageShown && <AddMessage /> }
      {props.questions.map((obj) => {
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
};
Questions.propTypes = {
  messageShown: PropTypes.bool,
  loaded: PropTypes.bool,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
  })),
};
Questions.defaultProps = {
  messageShown: false,
  loaded: false,
  questions: [{ id: 0, question: 'What happens if there is an error getting your information?', answer: 'You get this message' }],
};
export default Questions;
