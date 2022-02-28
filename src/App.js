
import './App.css';
import MoviesContainer from './mainMovies/moviesContainer';
import Pagination from './pagination/pagination';


function App() {
  return (
    <div>
      <MoviesContainer />
        <Pagination/>
    </div>
  );
}

export default App;
