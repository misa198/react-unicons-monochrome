import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCopyAlt: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M16,9c-1.10457,0-2-0.89543-2-2V2h-4C8.34536,1.99779,7.00221,3.33735,7,4.99199C7,4.99466,7,4.99733,7,5v10c-0.00221,1.65464,1.33735,2.99779,2.99199,3C9.99466,18,9.99733,18,10,18h8c1.65464,0.00221,2.99779-1.33735,3-2.99199c0-0.00267,0-0.00534,0-0.00801V9H16z"
        ></path>
        <path
          className="uim-quaternary"
          d="M10,18c-0.00269,0-0.00531,0-0.008,0C8.33734,17.9978,6.9978,16.65466,7,15V6H6C4.34534,5.9978,3.0022,7.33734,3,8.992C3,8.99469,3,8.99731,3,9v10c-0.0022,1.65466,1.33734,2.9978,2.992,3C5.99469,22,5.99731,22,6,22h8c1.65466,0.0022,2.9978-1.33734,3-2.992c0-0.00269,0-0.00531,0-0.008v-1H10z"
        ></path>
        <path
          className="uim-primary"
          d="M21,9h-5c-1.10457,0-2-0.89543-2-2V2L21,9z"
        ></path>
      </svg>
    </Wrapper>
  );
};
