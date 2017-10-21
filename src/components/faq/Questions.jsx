import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './faq.scss';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: {} };
  }

  componentDidMount() {
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
  render() {
    if (!this.state.loaded) {
      return <p>.....Loading</p>;
    }
    console.log(this.state.questions);
    return (
      <ul className={styles.questions}>
        {this.props.messageShown && <li>Thank you for adding a new question</li>}
        {this.state.questions.map((obj) => {
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
  }
}

Questions.propTypes = {
  messageShown: PropTypes.bool,
};
Questions.defaultProps = {
  messageShown: false,
};


export default Questions;
