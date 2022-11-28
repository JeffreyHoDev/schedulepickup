import './App.css';
import NavbarComponent from './components/navbar/navbar.component';
import SchedulePage from './pages/schedule/schedule.page';
import GuardiansPage from './pages/guardians/guardians.page';
import DriversPage from './pages/drivers/drivers.page'
import VehiclesPage from './pages/vehicles/vehicles.page';
import TripsPage from './pages/trips/trips.page'
import AssignmentPage from './pages/assignment/assignment.page';
import LoginPage from './pages/login/login.page';

import PrivateRoute from './utils/privateroutewrapper.component'
import {
  Switch,
  Route
} from "react-router-dom";

import { useState } from 'react'

const App = () => {

  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="App">
        <NavbarComponent isLogin={isLogin} setIsLogin={setIsLogin}/>
        <Switch>
          <Route path="/login">
            <LoginPage setIsLogin={setIsLogin} isLogin={isLogin}/>
          </Route>
          <PrivateRoute path="/schedule" isLogin={isLogin}>
            <SchedulePage />
          </PrivateRoute>
          <PrivateRoute path="/guardians" isLogin={isLogin}>
            <GuardiansPage />
          </PrivateRoute>
          <PrivateRoute path="/drivers" isLogin={isLogin}>
            <DriversPage />
          </PrivateRoute>
          <PrivateRoute path="/vehicles" isLogin={isLogin}>
            <VehiclesPage />
          </PrivateRoute>
          <PrivateRoute path="/trips" isLogin={isLogin}>
            <TripsPage />
          </PrivateRoute>
          <PrivateRoute path="/assignment" isLogin={isLogin}>
            <AssignmentPage />
          </PrivateRoute>
          <Route path="/">
            <LoginPage setIsLogin={setIsLogin} isLogin={isLogin}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
