import './App.css';
import NavbarComponent from './components/navbar/navbar.component';
import SchedulePage from './pages/schedule/schedule.page';
import GuardiansPage from './pages/guardians/guardians.page';
import DriversPage from './pages/drivers/drivers.page'
import VehiclesPage from './pages/vehicles/vehicles.page';
import TripsPage from './pages/trips/trips.page'
import AssignmentPage from './pages/assignment/assignment.page';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarComponent />
  },
  {
    path: '/assignment',
    element: <AssignmentPage />
  },
  {
    path: '/drivers',
    element: <DriversPage />
  },
  {
    path: '/guardians',
    element: <GuardiansPage />
  },
  {
    path: '/trips',
    element: <TripsPage />
  },
  {
    path: '/schedule',
    element: <SchedulePage />
  },
  {
    path: '/vehicles',
    element: <VehiclesPage />
  },
]);

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <RouterProvider router={router} />
      {/* <GuardiansPage /> */}
      {/* <DriversPage /> */}
      {/* <VehiclesPage /> */}
      {/* <TripsPage /> */}
      {/* <AssignmentPage /> */}
      {/* <SchedulePage/> */}
    </div>
  );
}

export default App;
