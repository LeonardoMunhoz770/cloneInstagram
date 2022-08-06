import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Like, Heart } from "./styles";

export default function LikePost({ size }) {
  const [isLike, setIsLike] = useState(false);
  return (
    <Like onPress={() => setIsLike(!isLike)}>
      <Heart>
        <AntDesign
          name={isLike ? "heart" : "hearto"}
          size={size}
          color={isLike ? "red" : "black"}
        />
      </Heart>
    </Like>
  );
}
