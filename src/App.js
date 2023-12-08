import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Catagories from './components/Catagories';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
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
