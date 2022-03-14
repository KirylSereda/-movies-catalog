import Header from './components/header/header'
import Movies from './components/movies/movies'
import Pagination from './components/pagination/pagination'
import PromoMovie from './components/promofilm/promoMovie'

function App() {
    return (
        <>
            <Header />
            <PromoMovie />
            <Movies />
            <Pagination />
        </>
    )
}

export default App
