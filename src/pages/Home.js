import Main from "../components/Main";
import requests from "../Request";
import Row from "../components/Row";

function Home() {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Related" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
}

export default Home;
