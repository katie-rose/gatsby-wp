import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const PrimaryLayout = props => (
  <div>
    <Header />
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className={props.column}>{props.children}</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrimaryLayout;
