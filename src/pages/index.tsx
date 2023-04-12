import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "@component/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="text-red-200 text-2xl">Hello World</div>
      <main className="flex min-h-screen flex-col items-center justify-center">
          
          <p className="text-2xl text-red-200">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
      </main>
    </>
  );
};

export default Home;
