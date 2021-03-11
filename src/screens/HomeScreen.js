import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import request from '../Request'
import Row from '../Row'


function  HomeScreen() {
    return (
        <div className="homescreen">
           <Nav />
            <Banner />

            <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOrginals}
            isLargeRow/>


            <Row title="Trending Now" fetchUrl={request.fetchTrending} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />

        </div>
    );
}

export default HomeScreen;
