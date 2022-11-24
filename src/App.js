import './App.css';
import NavbarComponent from './components/navbar/navbar.component';
import SchedulePage from './pages/schedule/schedule.page';
import GuardiansPage from './pages/guardians/guardians.component';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <GuardiansPage />
    </div>
  );
}

export default App;
