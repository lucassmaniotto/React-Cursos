import React from "react";
import BaseComponent from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface ImageProps {
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
}

export default function Image({ src, alt, styleSheet, ...props }: ImageProps) {
  return (
      <BaseComponent 
        src={src} 
        alt={alt} 
        as="img" 
        $styleSheet={styleSheet}
        {...props} 
      />
    )
}
