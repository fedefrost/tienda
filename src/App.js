import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions'
import './default.scss';

//hoc
import WithAuth from './hoc/withAuth';
import WithAdmin from './hoc/withAdminAuth';

//layout
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

//toolbar
import AdminToolBar from './components/AdminToolbar';

const App = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">

      <AdminToolBar />

      <Switch>

        <Route exact path="/" render={() => (

          <HomePageLayout>
            <Homepage />
          </HomePageLayout>

        )} />

        <Route path="/registration" render={() => (

          <MainLayout>
            <Registration />
          </MainLayout>

        )} />

        <Route path="/login" render={() => (

          <MainLayout>
            <Login />
          </MainLayout>

        )} />

        <Route path="/recovery" render={() => (

          <MainLayout>
            <Recovery />
          </MainLayout>

        )} />

        <Route path="/dashboard" render={() => (
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
        )} />

        <Route path="/admin" render={() => (
          <WithAdmin>
            <MainLayout>
              <Admin />
            </MainLayout>
          </WithAdmin>
        )} />

      </Switch>

    </div>
  );
}

export default App;
