import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMoonEclipse: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M12,2a9.98011,9.98011,0,0,0-2.5.32788,9.98666,9.98666,0,0,1,0,19.34424A9.99549,9.99549,0,1,0,12,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
