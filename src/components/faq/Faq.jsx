import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './faq.scss';
import QuestionForm from './QuestionForm';
import Questions from './Questions';

const AddQuestion = props => (
  <div>
    <p><button onClick={props.openForm}>+</button>  Add a new question</p>
  </div>
);
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
  updateQuestionsHandler() {
    this.getQuestions();
  }
  addMessageHandler() {
    this.setState({
      messageShown: true,
    });
  }
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

AddQuestion.propTypes = {
  openForm: PropTypes.func,
};
AddQuestion.defaultProps = {
  openForm: function defaultfn() {},
};

export default Faq;
