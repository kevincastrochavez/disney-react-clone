import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Container, Content, Title, Wrap } from "./MovieArray.styles";

function MovieArray({ selector, category }) {
  const movies = useSelector(selector);

  return (
    <Container>
      <Title>{category}</Title>
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

export default MovieArray;
