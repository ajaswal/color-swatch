import React from "react";
import { convertHSLToRGB, convertBRGBToRGB } from "../../utils";
import { Container, ColorColumn, ColorDetails, WhiteSpan } from "./Swatch.styled";

const getRGBColors = ({ kind, components }) => {
  switch (kind) {
    case "rgb":
      return components;

    case "hsl":
      return convertHSLToRGB(components);

    case "brgb":
      return convertBRGBToRGB(components);

    default:
      // defaulting to all zeros to
      // handle gracefully of a non-existing kind
      return { red: 0, green: 0, blue: 0 };
  }
};

function Swatch({ colors }) {
  const rgbColors = colors.map((color) => {
    return {
      components: getRGBColors(color),
    };
  });

  return (
    <Container>
      {rgbColors.map(({ components: { red, green, blue } }, index) => (
        <ColorColumn key={index} bgColor={`rgb(${red}, ${green}, ${blue})`}>
          <ColorDetails>
            <WhiteSpan>{`rgb(${red}, ${green}, ${blue})`}</WhiteSpan>
          </ColorDetails>
        </ColorColumn>
      ))}
    </Container>
  );
}

export default Swatch;
