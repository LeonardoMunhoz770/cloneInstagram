import React, { useEffect, useState } from "react";
import { StatusBar, FlatList, View, StyleSheet } from "react-native";
import {
  Post,
  Header,
  Avatar,
  Name,
  PostImage,
  Description,
  Icons,
  Commit,
  Share,
  IconRight,
  ButtonImage,
  ViewAvatar,
  TextAuthor,
  AvatarStorie,
  ViewAvatarStorie
} from "./styles";
import { Fontisto, Feather } from "@expo/vector-icons";
import { feed } from "./posts";
import LikePost from "../../components/like";
import Save from "../../components/save";
import { useNavigation } from "@react-navigation/native";

export function Feed() {
  const [photos, setPhotos] = useState([]);
  const navigation = useNavigation();

  const getPhotos = () => {
    fetch(`https://picsum.photos/v2/list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setPhotos(response.slice(1,30));
      });
  };
  
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <View>
        <View style={styles.containerStorie}>
          <FlatList
            data={photos}
            horizontal
            keyExtractor={(post) => post.id}
            renderItem={({ item }) => {
              return (
                <ViewAvatar>
                  <ViewAvatarStorie>
                    <AvatarStorie size={75} source={{ uri: item.download_url}} />
                    <TextAuthor>{item.author}</TextAuthor>
                  </ViewAvatarStorie>

                </ViewAvatar>
              );
            }}
            contentContainerStyle={{
              padding: 16,
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <FlatList
          data={feed}
          keyExtractor={(post) => String(post.id)}
          renderItem={({ item }) => {
            return (
              <Post>
                <Header>
                  <Avatar size={32} source={{ uri: item.small }} />
                  <Name>{item.author.name}</Name>
                </Header>

                <PostImage
                  ratio={item.aspectRatio}
                  source={{ uri: item.image }}
                />

                <Icons>
                  <LikePost size={25} />
                  <ButtonImage
                    onPress={() =>
                      navigation.navigate("Comments", {
                        name: [item.author.name],
                        image: [item.image],
                        ratio: [item.aspectRatio],
                        description: [item.description],
                      })
                    }
                  >
                    <Commit>
                      <Fontisto name="comment" size={25} color="black" />
                    </Commit>
                  </ButtonImage>
                  <Share>
                    <Feather name="send" size={25} color="black" />
                  </Share>
                  <IconRight>
                    <Save />
                  </IconRight>
                </Icons>

                <Description>
                  <Name>{item.author.name}</Name> {item.description}
                </Description>
              </Post>
            );
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerStorie: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 0.3,
  },
});
