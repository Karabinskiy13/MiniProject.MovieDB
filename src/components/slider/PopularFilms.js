import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slick";
import {getMoviesNowPlaying} from "../../store/slices/movies.slice";
import scrollRight from "../../images/scrollRight.svg"
import {Slide} from "./Slide"
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const PopularFilms = () => {
    const {nowPlayingMovies} = useSelector(state => state.moviesReducer)
    const nowPlayArray = nowPlayingMovies.results
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoviesNowPlaying())
    }, [dispatch])
    console.log(nowPlayArray)

    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <img className={className} style={style} onClick={onClick} src={scrollRight} alt="scroll Right"/>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: <SampleNextArrow/>
    }
    return (
        <div>
            <div className="carousel">
                <Slider {...settings}>
                    {nowPlayArray && nowPlayArray.slice(9,13).map(movie => <Slide key={movie.id} movie={movie}/>)}
                </Slider>
            </div>
        </div>
    );
};

export default PopularFilms;