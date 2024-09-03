import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const BackgroundPage = ({
  children,
  styles,
  colors,
}: {
  children: React.ReactNode;
  styles: Object;
  colors: {
    colors: string[];
    locations: number[];
  };
}) => {
  return (
    <LinearGradient
      colors={colors.colors}
      locations={colors.locations}
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: -0 }}
      style={styles}
    >
      {children}
    </LinearGradient>
  );
};

export default BackgroundPage;
