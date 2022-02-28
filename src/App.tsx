import './App.css';
import Header from './components/header/header';
import Movies from './components/mainMovies/movies';
import Pagination from './components/pagination/pagination';

function App() {
  return (
    <div >
      <Header/>
      <Movies/>
      <Pagination/>
    </div>
  );
}

export default App;
