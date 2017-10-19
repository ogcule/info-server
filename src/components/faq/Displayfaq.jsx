import React from 'react';
import styles from './faq.scss';
import { hello, getFAQ } from './../../util/api';

hello();
getFAQ();

const Displayfaq = () => (
  <section className={styles.displayFaq}>
    <div>
      <header>Frequently asked questions</header>
    </div>
  </section>
);

export default Displayfaq;
