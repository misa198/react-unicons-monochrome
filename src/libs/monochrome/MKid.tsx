import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MKid: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <circle cx="9" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="15" cy="10" r="1" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M12 8a3 3 0 0 1 0-6 1 1 0 0 1 0 2 1 1 0 0 0 0 2 1 1 0 0 1 0 2zM12 17.07715a3.31873 3.31873 0 0 1-2.86621-1.6543 1.00016 1.00016 0 1 1 1.73242-1 1.30948 1.30948 0 0 0 2.26758 0 1.00016 1.00016 0 0 1 1.73242 1A3.31873 3.31873 0 0 1 12 17.07715z"
        ></path>
      </svg>
    </Wrapper>
  );
};
