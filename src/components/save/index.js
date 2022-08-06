import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { IconRight } from "./styles";

export default function Save() {
  const [save, setSave] = useState(false);
  return (
    <IconRight onPress={() => setSave(!save)}>
      <Fontisto
        name={save ? "bookmark-alt" : "bookmark"}
        size={25}
        color="black"
      />
    </IconRight>
  );
}
