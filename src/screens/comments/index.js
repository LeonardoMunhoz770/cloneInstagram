import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ImagePublic,
  AutorPublic,
  DescriptionComment,
  ViewComments,
  Comment,
  ViewText,
} from "./styles";

import LikePost from "../../components/like";

export function PublicationInsta({ route }) {
  const [data, setData] = useState();
  const [photos, setPhotos] = useState();

  const getComments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setData(data.slice(1,18)));
  };
  const getPhotos = () =>{
    fetch("https://picsum.photos/v2/list", {
      method: 'GET',
      headers: {
        "Content-type": "application/json;"
      }
    })
      .then((response) => response.json() )
      .then((response) => setPhotos(response.slice(0,1)))
  }
  useEffect(() => {
    getComments();
    getPhotos();
  }, []);

  return (
    <View>
      <ImagePublic>
        <AutorPublic>{route.params.name}</AutorPublic>
        <DescriptionComment> {route.params.description}</DescriptionComment>
      </ImagePublic> 
      <FlatList
        data={data}
        keyExtractor={(comment) => String(comment.id)}
        renderItem={({ item }) => {
          return (
            <ViewComments>
              <ViewText>
                <Comment>{item.body}</Comment>
              </ViewText>
              <LikePost />
              
            </ViewComments>
          );
        }}
      />
    </View>
  );
}

