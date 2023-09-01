import { useEffect, useState } from "react";
// esse import que permite pegar a query string da url e utiliza-la
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q"); // dando um get em q eu vou receber o valor que o usuario buscou

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`; // o & é utilizado quando eu estou unindo mais um parametro para a query string. então eu passo a variavel query que é onde comtém o que vai ser buscado
  }, [query]); // se nada for adicionado no array dependencias ele não ira reexecutar essa função aqui, vai apenas mudar os states, então passamos o query para que ele entenda que deve executar mais de uma vez caso receba esse valor dnv

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;