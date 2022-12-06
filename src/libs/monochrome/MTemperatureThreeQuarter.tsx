import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTemperatureThreeQuarter: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M11.99121,22.99805a6.24981,6.24981,0,0,1-1.27734-.13282A5.99448,5.99448,0,0,1,7.5,13.03809V5.5a4.5,4.5,0,0,1,9,0v7.53711a5.99467,5.99467,0,0,1-4.50879,9.96094Z"
        ></path>
        <path
          className="uim-primary"
          d="M13,15.27734V8.5a1,1,0,0,0-2,0v6.77734a2,2,0,1,0,2,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
