// usestate para gerenciar o estado dos filmes e useeffect para chamar a api quando a pagina carregar
import { useState, useEffect } from "react";

// importando variaveis que estão no env quando utilizamos vite
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div>
      {topMovies && 
      topMovies.map((movie) => <p>{movie.title</p>)}</div>
  );
};

export default Home

/* com o useeffect eu tenho a possibilidade de executar uma função em alguns estagios a minha aplicação e isso vai ser baseado em um array dependecias que temos depois que a função é executada a cada que vez que alguma dependencia desse array é modificada.
como eu não quero mapear nenhuma função dentro do getTopRatedMovies, eu só preciso executar aquela função quando a pagina for carregada então meu array fica vazio */