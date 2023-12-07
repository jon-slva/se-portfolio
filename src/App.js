import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/resume' />
          <Route path='/contact' />
          <Route path='/404' />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
