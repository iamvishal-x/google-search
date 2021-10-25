import Head from "next/head";
import Header from "../components/Header";
// import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

// ///////////////////////////////////////////////////////////////////

const Search = ({ results }) => {
  const router = useRouter();

  // console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term}- Google Search </title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
// ============================================
export async function getServerSideProps(context) {
  const useDummyData = false;
  // // api https://developers.google.com/custom-search/v1/using_rest
  const API_KEY = process.env.API_KEY;
  // // context key https://cse.google.com/cse/create/new
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  //pass the results to the client after the server has rendered the data in html file
  return {
    props: {
      results: data,
    },
  };
}
