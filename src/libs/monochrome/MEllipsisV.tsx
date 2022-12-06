import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEllipsisV: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="12" cy="12" r="2" className="uim-primary"></circle>
        <circle cx="12" cy="5" r="2" className="uim-primary"></circle>
        <circle cx="12" cy="19" r="2" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
