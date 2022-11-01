import React from 'react';

import ToDo from './Components/ToDo';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ToDo />
        <Footer />
      </>
    );
  }
}
