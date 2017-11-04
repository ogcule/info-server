import React from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';
import styles from './faq.scss';
import FormContainer from './containers/FormContainer';
import Subtitle from './../shared/Subtitle';

const AddQuestion = props => (
  <div className={styles.add}>
    <p><button onClick={props.openForm}>+</button>  Add a new question</p>
  </div>
);

const FaqPage = props => (
  <div className={styles.faqBox}>
    <Subtitle subtitle="Frequently asked questions" />
    <Questions
      messageShown={props.messageShown}
      questions={props.questions}
      loaded={props.loaded}
    />
    {!props.expanded ? <AddQuestion openForm={props.handleFormChange} />
                            : <FormContainer
                              addMessage={props.addMessage}
                              updateQuestions={props.updateQuestions}
                              closeForm={props.handleFormChange}
                            />
    }
  </div>
);

FaqPage.propTypes = {
  messageShown: PropTypes.bool,
  expanded: PropTypes.bool,
  loaded: PropTypes.bool,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
  })),
  handleFormChange: PropTypes.func,
  addMessage: PropTypes.func,
  updateQuestions: PropTypes.func,
};
FaqPage.defaultProps = {
  messageShown: false,
  expanded: false,
  loaded: false,
  questions: {},
  handleFormChange: null,
  addMessage: null,
  updateQuestions: null,
};
AddQuestion.propTypes = {
  openForm: PropTypes.func,
};
AddQuestion.defaultProps = {
  openForm: null,
};

export default FaqPage;
