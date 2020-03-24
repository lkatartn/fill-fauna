import Head from "next/head";
import { Main } from "../components/main";

const Home = () => (
  <div className="container">
    <Head>
      <title>Fill you FaunaDB collection from a json file</title>
    </Head>

    <main>
      <h1>
        Fill you FaunaDB collection <br /> from a json file
      </h1>
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
