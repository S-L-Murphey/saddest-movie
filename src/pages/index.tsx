import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { getMovieForVote } from "@component/utils/getRandomMovie";

const Home: NextPage = () => {
  const [movie, setMovie] = useState<string>('')
  const [movieForVote] = getMovieForVote();
 //const [movieData, setMovieData] = useState<any>()

  useEffect(() => {
    if (movieForVote) {
      setMovie(movieForVote);
    }
  }, []);

  // const randomMovie = api.movie.movie.useQuery({ id: movie });

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '',
  //       'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  //     }
  //   };

  //   fetch(`https://movie-database-alternative.p.rapidapi.com/?r=json&i=${movie}&type=movie`, options)
  //     .then(response => response.json())
  //     .then(response => setMovieData(response))
  //     .catch(err => console.error(err));
  // }, [movie])

  console.log(movie)

  return (
    <>
      <div className="text-red-200 text-2xl">Did U Cry? :(</div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-2xl text-red-200 mb-4">Did You Cry?</div>
        <div className="p-10 border border-white">
          <div className="text-2xl text-red-200">
          </div>
        </div>
        <div className="flex">
          <button className="text-2xl text-red-200 pr-4">Yes</button>
          <button className="text-2xl text-red-200">No</button>
        </div>
      </main>
    </>
  );
};

export default Home;
