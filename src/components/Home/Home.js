import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import firestore from "../../firebase";
import ImgSlider from "../Slider/Slider";
import Viewers from "../Viewers/Viewers";
import MovieArray from "../Recommends/MovieArray";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import { selectRecommend } from "../../features/movie/movieSlice";

import { Container } from "./Home.styles";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    firestore.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [
              ...recommends,
              {
                id: doc.id,
                ...doc.data(),
              },
            ];
            break;
          case "new":
            newDisneys = [
              ...newDisneys,
              {
                id: doc.id,
                ...doc.data(),
              },
            ];
            break;
          case "original":
            originals = [
              ...originals,
              {
                id: doc.id,
                ...doc.data(),
              },
            ];
            break;
          case "trending":
            trendings = [
              ...trendings,
              {
                id: doc.id,
                ...doc.data(),
              },
            ];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          origininal: originals,
          trending: trendings,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <MovieArray selector={selectRecommend} category="Recommended for You" />
    </Container>
  );
}

export default Home;
