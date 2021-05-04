import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectRecommend } from "../../features/movie/movieSlice";

import { Container, Content, Wrap } from "./Recommends.styles";

function Recommends() {
  const movies = useSelector(selectRecommend);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Recommends;
