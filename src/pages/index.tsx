import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "@component/utils/api";
import { getMovieForVote } from "@component/utils/getRandomMovie";

const Home: NextPage = () => {

  const [movie, setMovie] = useState<string | number | undefined>('')
  const hello = api.example.hello.useQuery({ text: "from Nashville" });

  const [movieForVote] = getMovieForVote();

  useEffect(() => {
    setMovie(movieForVote);
  }, []);

  return (
    <>
      <div className="text-red-200 text-2xl">Did U Cry? :(</div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-2xl text-red-200 mb-4">Did You Cry?</div>
        <div className="p-48 border border-white">
          <div className="text-2xl text-red-200">{movie}</div>
        </div>
        <div className="flex">
          <button className="text-2xl text-red-200 pr-4">Yes</button>
          <button className="text-2xl text-red-200">No</button>
        </div>
        <p className="text-2xl text-red-200">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
      </main>
    </>
  );
};

export default Home;
