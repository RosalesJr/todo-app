import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ToDo from './Components/ToDo';
import AppHeader from './Components/Header/Header';
import SettingsForm from './Components/SettingForm/FormSetting';
import Auth from './Components/Auth';
import Login from "./Components/Login/index";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <AppHeader />
          <Login />
          <Auth capability="create">
            <Routes>
              <Route
                path="/"
                element={
                  <ToDo />
                }>
              </Route>
              <Route
                path="/settings"
                element={
                  <SettingsForm />
                }>
              </Route>
            </Routes>
          </Auth>
          <Footer />
        </Router>

      </>
    );
  }
}