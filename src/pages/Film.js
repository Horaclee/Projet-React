import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Film = () => {
  let { id } = useParams();
  const [film, setPokemon] = useState('null');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d3994bb5c3f66e144147b5e2130fc60c`);
    console.log("res", res)
    console.log("res", res.data.results);
    setPokemon(res.data.results);

  }

  return (
    <div>
      <Link to="/">Accueil</Link>
      <p>Nom : {film[id]?.title}</p>
      <p>langue : {film[id]?.original_language}</p>
      <p>synopsis : {film[id]?.overview}</p>
      <p>data de sortie : {film[id]?.release_date}</p>
      <a><img class="image" src={`https://image.tmdb.org/t/p/original/${film[id].backdrop_path}`}></img></a>

    </div>
  );
};

export default Film;