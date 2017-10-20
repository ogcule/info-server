import React from 'react';
import styles from './faq.scss';
import DisplayFaq from './Displayfaq';
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
          <h2>Frequently asked questions</h2>
          <p>.....Loading</p>
        </div>
      );
    }
    console.log(this.state.faq);
    return (
      <div className={styles.flexContainer}>
        <h2>Frequently asked questions</h2>
        <DisplayFaq allFaq={this.state.faq} />
      </div>
    );
  }
}

export default Faq;
