import React from "react";
import { convertHSLToRGB } from "../../utils";
import {
  Container,
  Column,
  ColorDetails,
  WhiteSpan,
} from "./ColorSwatch.styled";

function ColorSwatch({ colors }) {
  const getRGBColors = ({ kind, components }) => {
    switch (kind) {
      case "hsl":
        return convertHSLToRGB(components);
    
      default:
        return components;
    }
  };
  const rgbColors = colors.map((colr) => {
    return {
      components: getRGBColors(colr),
    };
  });
  return (
    <Container>
      {rgbColors.map(({ components: { red, green, blue } }, index) => (
        <Column
          key={index}
          style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
        >
          <ColorDetails>
            <WhiteSpan>{`rgb(${red}, ${green}, ${blue})`}</WhiteSpan>
          </ColorDetails>
        </Column>
      ))}
    </Container>
  );
}

export default ColorSwatch;
