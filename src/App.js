import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/users.actions'
import './default.scss';

//layout
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery'

class App extends Component {

  authListener = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.authListener = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await handleUserProfile(userAuth);
          userRef.onSnapshot(snapshot => {
            this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()

            })
          })
        }

        this.props.setCurrentUser(userAuth);

      });
  }

  componentWillUnmount() {
    this.authListener();
  }


  render() {

    const { currentUser } = this.props;

    return (
      <div className="App">

        <Switch>

          <Route exact path="/" render={() => (

            <HomePageLayout>
              <Homepage />
            </HomePageLayout>

          )} />

          <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (

            <MainLayout>
              <Registration />
            </MainLayout>

          )} />

          <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : (

            <MainLayout>
              <Login />
            </MainLayout>

          )} />

          <Route path="/recovery" render={() => (

            <MainLayout>
              <Recovery />
            </MainLayout>

          )} />

        </Switch>

      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
