import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Plants, Error, Contact } from './pages';
import Navbar from './components/Navbar';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='plants' element={<Plants />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default App;
