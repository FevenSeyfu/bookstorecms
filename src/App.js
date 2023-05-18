import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import Catagories from './components/Catagories';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import { getBooksList } from './redux/books/bookSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksList());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Books />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
