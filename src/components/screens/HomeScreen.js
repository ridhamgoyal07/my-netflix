import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import Row from "../Row";
import requests from "../../Requests";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetch={requests.fetchNetflixOriginals}
        isLargeRow="true"
      />
      <Row title="Trending Now" fetch={requests.fetchTrending} />
      <Row title="Top Rated" fetch={requests.fetchTopRated} />
      <Row title="Action Movies" fetch={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetch={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetch={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetch={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetch={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
