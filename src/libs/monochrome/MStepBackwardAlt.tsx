import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MStepBackwardAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M19,21a3.00328,3.00328,0,0,1-3-3V6a3,3,0,0,1,6,0V18A3.00328,3.00328,0,0,1,19,21Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M11.333,18.71582a2.6179,2.6179,0,0,1-1.34619-.377l-6.667-3.98633a2.75658,2.75658,0,0,1,0-4.70508l6.667-3.98633A2.5892,2.5892,0,0,1,12.627,5.63086,2.73773,2.73773,0,0,1,14,8.01367v7.97266a2.73773,2.73773,0,0,1-1.373,2.38281A2.61,2.61,0,0,1,11.333,18.71582Zm-7.5-8.21h0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
