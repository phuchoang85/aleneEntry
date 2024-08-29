import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { colorLinearPublic } from '@/app/constant/stylesPuplic';
const BackgroundPage = ({children}:  { children: React.ReactNode }) => {
  return (
    <LinearGradient
    colors={colorLinearPublic.linear.colors}
    locations={colorLinearPublic.linear.locations}
    start={{ x: 2, y: 2 }}
    end={{ x: 0, y: -0 }}
    style={{flex: 1}}
    >
      {children}
    </LinearGradient>
  )
}

export default BackgroundPage