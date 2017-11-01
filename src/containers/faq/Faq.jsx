import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './../../components/faq/faq.scss';
import QuestionForm from './../../components/faq/QuestionForm';
import Questions from './../../components/faq/Questions';
// stateless component for button to open the form to add questions and answers
const AddQuestion = props => (
  <div>
    <p><button onClick={props.openForm}>+</button>  Add a new question</p>
  </div>
);
// component for the frequently asked questions section
class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
      // message to say new question added
      messageShown: false,
      expanded: false,
    };
    this.addMessageHandler = this.addMessageHandler.bind(this);
    this.updateQuestionsHandler = this.updateQuestionsHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  componentDidMount() {
    this.getQuestions();
  }
  // function that calls ger request to the api
  getQuestions() {
    axios.get('http://localhost:3000/faq')
      .then((response) => {
        if (response) {
          this.setState({
            questions: response.data,
            loaded: true,
          });
        } else {
          this.setState({
            loaded: false,
          });
        }
      })
      .catch(error => console.log(error));
  }
  // handler to make get request to the api
  updateQuestionsHandler() {
    this.getQuestions();
  }
  addMessageHandler() {
    this.setState({
      messageShown: true,
    });
  }
  // handler to change state for expanding the questions form
  handleFormChange() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    console.log(typeof (this.state.questions));
    console.log(this.state.questions);
    return (
      <div className={styles.flexContainer}>
        <h2>Frequently asked questions</h2>
        <Questions
          messageShown={this.state.messageShown}
          questions={this.state.questions}
          loaded={this.state.loaded}
        />
        {!this.state.expanded ? <AddQuestion openForm={this.handleFormChange} />
                                : <QuestionForm
                                  addMessage={this.addMessageHandler}
                                  updateQuestions={this.updateQuestionsHandler}
                                  closeForm={this.handleFormChange}
                                />
        }
      </div>
    );
  }
}
// propTypes and defaultProps
AddQuestion.propTypes = {
  openForm: PropTypes.func,
};
AddQuestion.defaultProps = {
  openForm: function defaultfn() {},
};

export default Faq;
