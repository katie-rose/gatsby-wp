import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (
  <div>
    <Header />
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col-xs-6'>
          <h1>About</h1>
          <p>Some words about me.</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
