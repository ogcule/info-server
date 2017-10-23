import React from 'react';
import axios from 'axios';
import querystring from 'querystring';
import PropTypes from 'prop-types';
import styles from './faq.scss';
// stateless component for the close button
const CloseForm = props => (
  <div className="closeBtn">
    <button onClick={props.closeForm}>&times;</button>
  </div>
);
// component with the form to submit new question and answers to the database
class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      // computed property name
      [name]: value,
    });
  }

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
        console.log(response.data);
        this.props.addMessage();
        this.props.updateQuestions();
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className={styles.formContainer}>
        <CloseForm closeForm={this.props.closeForm} />
        <form method="post" onSubmit={this.handleSubmit}>
          <legend>Add a new frequently asked question</legend>
          <div className={styles.formRow}>
            <label htmlFor="question">
              New Question
              <input name="question" type="text" id="question" value={this.state.question} onChange={this.handleInputChange} required />
            </label>
          </div>
          <div className={styles.formRow}>
            <label htmlFor="answer">
              Answer
              <textarea name="answer" type="text" id="answer" value={this.state.answer} onChange={this.handleInputChange} required />
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
