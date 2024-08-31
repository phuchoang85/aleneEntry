import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colorLinearPublic } from "@/constant/stylesPuplic";

const BoxLinear = ({
  children,
  direction,
  styles
}: {
  children: React.ReactNode;
  direction: "top" | "down";
  styles: Object
}) => {
  const checkStart = () => {
    if(direction === "top") {
        return { x: 0.5, y: 0 };
    }else
    return { x: 0.5, y: 2 }
  };

  const checkEnd = () => {
    if(direction === "top") {
        return { x: 0.5, y: 0.1 };
    }else
    return { x: 0.5, y: 0 }
  };

  return (
    <LinearGradient
      colors={colorLinearPublic.mauKV.colors}
      locations={colorLinearPublic.mauKV.locations}
      start={checkStart()}
      end={checkEnd()}
      style={styles}
    >
      {children}
    </LinearGradient>
  );
};

export default BoxLinear;
