import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSwatchbook: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M9,22H5c-1.65611-0.00181-2.99819-1.34389-3-3V5c0.00181-1.65611,1.34389-2.99819,3-3h4c1.65611,0.00181,2.99819,1.34389,3,3v14C11.99819,20.65611,10.65611,21.99819,9,22z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20.29303,6.53516l-2.82819-2.82819c-1.17249-1.16986-3.07068-1.16986-4.24316,0L11.99341,4.9353C11.9939,4.95734,12,4.97784,12,5v14c0,0.02716-0.00732,0.05231-0.00806,0.07928l8.30109-8.30096C21.46289,9.60583,21.46289,7.70764,20.29303,6.53516z"
        ></path>
        <circle cx="7" cy="17" r="1" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M19.06476,12.00659l-7.07281,7.07269C11.99268,19.05231,12,19.02716,12,19c-0.00183,1.65613-1.34387,2.99817-3,3h10c1.65613-0.00183,2.99817-1.34387,3-3v-4C21.99817,13.36603,20.69031,12.04364,19.06476,12.00659z"
        ></path>
      </svg>
    </Wrapper>
  );
};