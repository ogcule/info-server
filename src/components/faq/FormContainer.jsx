import React from 'react';
import PropTypes from 'prop-types';
import apiFaq from './../../api/apiFaq';
import Form from './Form';

// component with the form to submit new question and answers to the database
class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      errorMsg: [],
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
    apiFaq.requestPost(this.state.question, this.state.answer)
      .then((data) => {
        const { answer = null, question = null } = data;
        console.log(answer, question);
        this.setState({
          errorMsg: {
            question,
            answer,
          },
        });
        this.props.addMessage();
        this.props.updateQuestions();
      });
  }
  render() {
    return (
      <Form
        closeForm={this.props.closeForm}
        handleSubmit={this.handleSubmit}
        errorQuestion={this.state.errorMsg.question}
        valueQuestion={this.state.question}
        valueAnswer={this.state.answer}
        handleInputChange={this.handleInputChange}
        errorAnswer={this.state.errorMsg.answer}
      />
    );
  }
}
FormContainer.propTypes = {
  closeForm: PropTypes.func,
  addMessage: PropTypes.func,
  updateQuestions: PropTypes.func,
};
FormContainer.defaultProps = {
  closeForm: null,
  addMessage: null,
  updateQuestions: null,
};
export default FormContainer;
