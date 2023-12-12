import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className='appContain'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/404' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
