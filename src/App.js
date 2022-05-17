import './App.css';
import {Route, Routes} from "react-router-dom";
import Genres from "./components/genres/Genres";
import Home from "./components/Home";
import MoviesByGenre from "./components/genres/MoviesByGenre";
import TopRated from "./components/movies/TopRatedMovies";
import GetMovies from "./components/movies/GetMovies";
import PopularFilms from "./components/slider/PopularFilms";
import {Search} from "./components/search/Search";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route index element={<PopularFilms/>}/>
                    <Route path={'movie/:id'} element={<GetMovies/>}/>
                    <Route path={'top_rated'} element={<TopRated/>}/>
                    <Route path={'/search'} element ={<Search/>}/>
                    <Route path={'genres'} element={<Genres/>}>
                        <Route path={':id'} element={<MoviesByGenre/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
