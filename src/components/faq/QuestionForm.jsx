import React from 'react';
import axios from 'axios';
import querystring from 'querystring';
import PropTypes from 'prop-types';
import ErrorMsg from './ErrorMessage';
import styles from './faq.scss';
// stateless component for the close button
const CloseForm = props => (
  <div>
    <button className={styles.closebtn} onClick={props.closeForm}>&times;</button>
  </div>
);
// component with the form to submit new question and answers to the database
class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      errorMsg: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handler for changing state from input values on the form
  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      // computed property name
      [name]: value,
    });
  }
  // handler for submit event from the form, this then does a post request to the api
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3000/faq',
      data: querystring.stringify({
        question: this.state.question,
        answer: this.state.answer,
      }),
    })
      .then((response) => {
        console.log(`post response ${response}`);
        this.props.addMessage();
        this.props.updateQuestions();
      })
      .catch((error) => {
        console.log(error.response.data.error);
        this.setState({
          errorMsg: {
            // need to get different error messsge to answer and questions.
            question: error.response.data.error.question.msg,
            answer: error.response.data.error.answer.msg,
          },
        });
      });
  }

  render() {
    return (
      <div className={styles.formContainer}>
        <CloseForm closeForm={this.props.closeForm} />
        <form method="post" onSubmit={this.handleSubmit} noValidate>
          <legend>Add a new frequently asked question</legend>
          <div className={styles.formRow}>
            <label htmlFor="question">
              New Question
              <input name="question" type="text" id="question" value={this.state.question} onChange={this.handleInputChange} />
            </label>
          </div>
          <div className={styles.formRow}>
            <label htmlFor="answer">
              Answer
              <textarea name="answer" type="text" id="answer" value={this.state.answer} onChange={this.handleInputChange} />
              <ErrorMsg msg={this.state.errorMsg.answer} />
            </label>
          </div>
          <div className={styles.formBtn}>
            <button type="submit" >Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
// propTypes and defaultProps
QuestionForm.propTypes = {
  closeForm: PropTypes.func,
};
QuestionForm.defaultProps = {
  closeForm: function defaultfn() {},
};
QuestionForm.propTypes = {
  addMessage: PropTypes.func,
  updateQuestions: PropTypes.func,
};
QuestionForm.defaultProps = {
  addMessage: function defaultfn() {},
  updateQuestions: function defaultfn() {},
};
CloseForm.propTypes = {
  closeForm: PropTypes.func,
};
CloseForm.defaultProps = {
  closeForm: function defaultfn() {},
};

export default QuestionForm;
