import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSkipForwardAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M5,21a3.00328,3.00328,0,0,1-3-3V6A3,3,0,0,1,8,6V18A3.00328,3.00328,0,0,1,5,21Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12.667,18.71582a2.61,2.61,0,0,1-1.29394-.34668A2.73773,2.73773,0,0,1,10,15.98633V8.01367a2.73773,2.73773,0,0,1,1.373-2.38281,2.58921,2.58921,0,0,1,2.64013.03027l6.667,3.98633a2.75658,2.75658,0,0,1,0,4.70508l-6.667,3.98633A2.6179,2.6179,0,0,1,12.667,18.71582Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
