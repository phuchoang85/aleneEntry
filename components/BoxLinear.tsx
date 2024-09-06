import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const BoxLinear = ({
  children,
  start,
  end,
  styles,
  colors,
}: {
  children: React.ReactNode;
  start: { x: number; y: number };
  end: { x: number; y: number };
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
      start={start}
      end={end}
      style={styles}
    >
      {children}
    </LinearGradient>
  );
};

export default BoxLinear;
