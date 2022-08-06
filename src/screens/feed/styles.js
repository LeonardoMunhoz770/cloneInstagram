import styled from "styled-components/native";

export const DescriptionComment = styled.Text``;

export const ButtonImage = styled.TouchableOpacity``;

export const Like = styled.TouchableOpacity``;

export const Comment = styled.Text``;

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  border-radius: ${(props) => props.size + "px"};
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;
export const PostImage = styled.Image`
  width: 100%;
  aspect-ratio: ${(props) => props.ratio};
`;


export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Icons = styled.View`
  height: 45px;
  flex-direction: row;
  padding: 5px 5px;
  align-items: center;
`;

export const Commit = styled.View`
  padding: 0px 5px;
`;
export const Share = styled.View`
  padding: 0px 5px;
`;

export const IconRight = styled.TouchableOpacity`
  width: 70%;
  align-items: flex-end;
`;


export const ViewAvatar = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const TextAuthor = styled.Text`
  text-align: center;

`;

export const AvatarStorie = styled.Image`
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  border-radius: ${(props) => props.size + "px"};
  `;

export const ViewAvatarStorie = styled.View`
  align-items: center;
  
`

export const AvatarComment = styled.Image`
  background-color: red;
  align-items: center;

`