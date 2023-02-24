import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import HomePage from './pages/HomePage';
import FilmList from './pages/FilmList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>

        <Route path='/FilmList' element={<FilmList />}/>
      </Routes>
    </div>
  );
}

export default App;
