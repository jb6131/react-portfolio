import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Header />
          <Navigation />
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
