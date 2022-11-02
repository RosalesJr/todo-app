import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ToDo from './Components/ToDo';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import FormSetting from './FormSetting';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
          <Route path="/"
            element={<ToDo />}>
          </Route>
          <Route path="/setting"
            element={<FormSetting />}>
          </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
