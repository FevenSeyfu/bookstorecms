import { Routes, Route } from 'react-router-dom';
import Books from './components/Books.js';
import Catagories from './components/Catagories.js';
import NotFound from './components/NotFound.js';
import NavBar from './components/NavBar.js';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Books />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
