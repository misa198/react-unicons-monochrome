import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLocationPinAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M19,22H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,18a.99676.99676,0,0,1-.707-.293L7.19531,13.60938a6.79469,6.79469,0,1,1,9.60938,0L12.707,17.707A.99676.99676,0,0,1,12,18Z"
        ></path>
        <circle cx="12" cy="8.805" r="2" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
