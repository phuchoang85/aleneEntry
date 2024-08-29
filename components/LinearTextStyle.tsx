import { View, Text } from "react-native";
import React from "react";
import { colorLinearPublic } from "@/app/constant/stylesPuplic";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
const LinearTextStyle = ({
  content,
  styles,
  children,
}: {
  content: string;
  styles: Object;
  children: React.ReactNode;
}) => {
  return (
    <MaskedView
      style={{ height: 100 }}
      maskElement={<Text style={styles}>{children}</Text>}
    >
      <LinearGradient
        colors={colorLinearPublic.linearYellowhao.colors}
        locations={colorLinearPublic.linearYellowhao.locations}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
};

export default LinearTextStyle;
