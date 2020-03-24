import Head from "next/head";
import { Main } from "../components/main";

const Home = () => (
  <div className="container">
    <Head>
      <title>Fill you faunaDB collection from json or csv file</title>
    </Head>

    <main>
      <h1>Drop a file below</h1>
      <Main />
    </main>
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Home;
