import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLabelAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M16,18H5a3.00328,3.00328,0,0,1-3-3V9A3.00328,3.00328,0,0,1,5,6H16a1.00012,1.00012,0,0,1,.707.293l5,5a.99962.99962,0,0,1,0,1.41406l-5,5A1.00012,1.00012,0,0,1,16,18Z"
        ></path>
        <circle cx="16" cy="12" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
