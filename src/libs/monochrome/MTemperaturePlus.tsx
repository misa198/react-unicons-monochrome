import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTemperaturePlus: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M9.49072,22.99805a6.24866,6.24866,0,0,1-1.27685-.13282A5.99471,5.99471,0,0,1,5,13.03809V5.5a4.5,4.5,0,0,1,9,0v7.53711a5.99493,5.99493,0,0,1-4.50928,9.96094Z"
        ></path>
        <path
          className="uim-primary"
          d="M10.5 15.27734V5.5a1 1 0 0 0-2 0v9.77734a2 2 0 1 0 2 0zM19.5 2.5H19V2a1 1 0 0 0-2 0v.5h-.5a1 1 0 0 0 0 2H17V5a1 1 0 0 0 2 0V4.5h.5a1 1 0 0 0 0-2z"
        ></path>
      </svg>
    </Wrapper>
  );
};