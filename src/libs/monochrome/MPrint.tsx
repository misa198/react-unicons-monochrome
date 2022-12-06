import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPrint: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M19,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v6C21.99819,16.65611,20.65611,17.99819,19,18z"
        ></path>
        <path
          className="uim-quaternary"
          d="M18,6V3c0-0.00037,0-0.00073,0-0.00116C17.99969,2.4469,17.55194,1.99969,17,2H7C6.99963,2,6.99927,2,6.99884,2C6.4469,2.00031,5.99969,2.44806,6,3v3H18z"
        ></path>
        <path
          className="uim-primary"
          d="M17,22H7c-0.55197,0.00031-0.99969-0.44689-1-0.99886C6,21.00076,6,21.00038,6,21v-6c-0.00031-0.55197,0.44689-0.99969,0.99886-1C6.99924,14,6.99962,14,7,14h10c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v6c0.00031,0.55197-0.44689,0.99969-0.99886,1C17.00076,22,17.00038,22,17,22z"
        ></path>
        <circle cx="7" cy="11" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
