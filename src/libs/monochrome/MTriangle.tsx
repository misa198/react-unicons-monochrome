import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTriangle: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21,20.794H3a1,1,0,0,1-.86621-1.5l9-15.5879a1.04009,1.04009,0,0,1,1.73242,0l9,15.5879A1,1,0,0,1,21,20.794Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
