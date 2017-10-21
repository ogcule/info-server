import React from 'react';
import axios from 'axios';
import querystring from 'querystring';
import PropTypes from 'prop-types';
import styles from './faq.scss';
// import { postRequest } from './../../util/api';

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
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit} className={styles.flexContainer}>
        <legend>Add a new Frequently asked question</legend>
        <div>
          <label htmlFor="question">
            New Question
            <input name="question" type="text" id="question" value={this.state.question} onChange={this.handleInputChange} required />
          </label>
        </div>
        <div>
          <label htmlFor="answer">
            Answer
            <textarea name="answer" type="text" id="answer" value={this.state.answer} onChange={this.handleInputChange} required />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.props.addMessage}>Submit</button>
        </div>
      </form>
    );
  }
}

QuestionForm.propTypes = {
  addMessage: PropTypes.func,
};
QuestionForm.defaultProps = {
  addMessage: function defaultfn() {},
};

export default QuestionForm;
