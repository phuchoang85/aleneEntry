import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { colorLinearPublic } from '@/constant/stylesPuplic';
const BackgroundPage = ({children, styles}:  { children: React.ReactNode, styles: Object }) => {
  return (
    <LinearGradient
    colors={colorLinearPublic.linear.colors}
    locations={colorLinearPublic.linear.locations}
    start={{ x: 2, y: 2 }}
    end={{ x: 0, y: -0 }}
    style={styles}
    >
      {children}
    </LinearGradient>
  )
}

export default BackgroundPage