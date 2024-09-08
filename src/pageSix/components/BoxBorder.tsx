import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colorLinearPublic } from "@/constant/stylesPuplic";

const BoxBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinearGradient
      colors={colorLinearPublic.goldLinear.colors}
      locations={colorLinearPublic.goldLinear.locations}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.container}
    >
      <LinearGradient
        colors={colorLinearPublic.green.colors}
        locations={colorLinearPublic.green.locations}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0, y: 0.5 }}
        style={styles.containerInside}
      >
        {children}
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 274,
    height: 168,
    borderRadius: 14,
    padding: 2,
  },
  containerInside: {
    borderRadius: 12,
    flex: 1,
    alignItems:'flex-end',
  },
});

export default BoxBorder;
