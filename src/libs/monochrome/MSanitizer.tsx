import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSanitizer: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M5,5a1,1,0,0,1-.707-1.707l.82861-.82861A4.96656,4.96656,0,0,1,8.65674,1H17a1,1,0,0,1,0,2H8.65674a3.022,3.022,0,0,0-2.1211.87842L5.707,4.707A.99676.99676,0,0,1,5,5Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M10,3V5.50006l.3999-.29986A1.00071,1.00071,0,0,1,11,5h4a1.00071,1.00071,0,0,1,.6001.2002L16,5.50012V3Z"
        ></path>
        <circle cx="13" cy="15" r="2" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M13,18a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,13,18Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M18.80029,7.6001,15.6001,5.2002A1.00071,1.00071,0,0,0,15,5H11a1.00071,1.00071,0,0,0-.6001.2002L7.19922,7.6001A3.01563,3.01563,0,0,0,6,10V22a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V10A3.01469,3.01469,0,0,0,18.80029,7.6001ZM13,18a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,13,18Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
