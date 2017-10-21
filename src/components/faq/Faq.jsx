import React from 'react';
import styles from './faq.scss';
import QuestionForm from './QuestionForm';
import Questions from './Questions';

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message to say new question added
      messageShown: false,
    };
    this.addMessageHandler = this.addMessageHandler.bind(this);
  }

  addMessageHandler() {
    this.setState({
      messageShown: true,
    });
  }

  render() {
    return (
      <div className={styles.flexContainer}>
        <h2>Frequently asked questions</h2>
        <Questions messageShown={this.state.messageShown} />
        <QuestionForm addMessage={this.state.addMessageHandler} />
      </div>
    );
  }
}

export default Faq;
