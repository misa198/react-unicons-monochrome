import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MShoppingCart: React.FC<Props> = ({
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
        <circle cx="8.5" cy="20.5" r="1.5" className="uim-primary"></circle>
        <circle cx="16.5" cy="20.5" r="1.5" className="uim-primary"></circle>
        <path
          className="uim-tertiary"
          d="M19,18H7a3.00006,3.00006,0,0,1-.3208-5.98291L4.88281,5.7251A1.00459,1.00459,0,0,0,3.92139,5H3A1,1,0,0,1,3,3h.92139A3.01216,3.01216,0,0,1,6.80566,5.17627l2.15577,7.54932A.99992.99992,0,0,1,8,14H7a1,1,0,0,0,0,2H19a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M6.80566,5.17627l2.15577,7.54932A.99992.99992,0,0,1,8,14h7.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907C6.76019,5.05939,6.78821,5.11505,6.80566,5.17627Z"
        ></path>
      </svg>
    </Wrapper>
  );
};