import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { About, Books, Home, Profile, NoPage, Register } from './pages';

import './App.css';

function App() {
  const key = localStorage.getItem('key');
  const secret = localStorage.getItem('secret');
  const isSignedIn = !(!key || !secret);
  return (
    <BrowserRouter>
      {!isSignedIn ? (
        <Register />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/books' element={<Books />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<Register />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
