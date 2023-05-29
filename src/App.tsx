import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { About, Books, Home, Profile, NoPage, Register } from './pages';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/books' element={<Books />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
