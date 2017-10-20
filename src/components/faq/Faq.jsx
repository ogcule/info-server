import React from 'react';
// import styles from './faq.scss';
// import Displayfaq from './Displayfaq';
// import PropTypes from 'prop-types';
import getAllFaqs from './../../util/api';


class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = { faq: {} };
  }

  componentDidMount() {
    getAllFaqs('faq')
      .then((data) => {
        if (data) {
          this.setState({
            faq: data,
            loaded: true,
          });
        } else {
          this.setState({
            loaded: false,
          });
        }
      });
  }
  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <h2>Topics</h2>
          <p>.....Loading</p>
        </div>
      );
    }
    console.log(this.state.faq);
    return (
      <div>
        <h2>Topics</h2>
        {this.state.faq.map((obj) => {
            const { id, question, answer } = obj;
            return (
              <ul key={id} data-id={id}>
                <li>{question}</li>
                <li>{answer}</li>
              </ul>
          );
        })}
      </div>
    );
  }
}
// FaqList.propTypes = {
//   question: PropTypes.arrayOf(PropTypes.string),
// };
// FaqList.defaultProps = {
//   question: ['hello', 'world'],
// };

export default Faq;
