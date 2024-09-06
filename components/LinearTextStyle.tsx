import { View, Text } from "react-native";
import React from "react";
import { colorLinearPublic } from "@/constant/stylesPuplic";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
const LinearTextStyle = ({
  styles,
  children,
  colors,
}: {
  styles: any;
  children: React.ReactNode;
  colors: {
    colors: string[];
    locations: number[];
  };
}) => {
  return (
    <MaskedView
      style={{ height: styles[1]?.height || 0 }}
      maskElement={<Text style={styles}>{children}</Text>}
    >
      <LinearGradient
        colors={colors.colors}
        locations={colors.locations}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
};

export default LinearTextStyle;
