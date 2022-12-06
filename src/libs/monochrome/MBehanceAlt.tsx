import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBehanceAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <g data-name="Brand Logos">
          <path
            className="uim-primary"
            d="M7.5,20H2a.99974.99974,0,0,1-1-1V12a.99974.99974,0,0,1,1-1H7.5a4.5,4.5,0,0,1,0,9ZM3,18H7.5a2.5,2.5,0,0,0,0-5H3Z"
          ></path>
          <path
            className="uim-primary"
            d="M7 13H2a.99974.99974 0 0 1-1-1V6A.99974.99974 0 0 1 2 5H7a4 4 0 0 1 0 8zM3 11H7A2 2 0 0 0 7 7H3zM20 7H16a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM22 14H14a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
          ></path>
          <path
            className="uim-primary"
            d="M18,20a5.00588,5.00588,0,0,1-5-5V13a5,5,0,1,1,10,0,1,1,0,0,1-2,0,3,3,0,0,0-6,0v2a2.9984,2.9984,0,0,0,5.90088.75391,1,1,0,0,1,1.93848.49218A4.98524,4.98524,0,0,1,18,20Z"
          ></path>
        </g>
      </svg>
    </Wrapper>
  );
};
