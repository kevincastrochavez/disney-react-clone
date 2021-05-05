import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import firestore from "../../firebase";

import {
  Background,
  Container,
  ImageTitle,
  ContentMeta,
  Controls,
  Player,
  Trailer,
  SubTitle,
  Description,
  AddList,
  GroupWatch,
} from "./DetailPage.styles";

function DetailPage() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    firestore
      .collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>

          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>

          <AddList>
            <span />
            <span />
          </AddList>

          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>

        <SubTitle>{detailData.subTitle}</SubTitle>

        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
}

export default DetailPage;
