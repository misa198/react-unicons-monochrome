import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAmbulance: React.FC<Props> = ({
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
          d="M22.89001,11.53003l-2.48999-3.33002C19.83215,7.44611,18.94385,7.00189,18,7h-2v10c0,0.55231-0.44769,1-1,1h7c0.55157-0.00165,0.99835-0.44843,1-1v-5C22.99805,11.83716,22.96051,11.67676,22.89001,11.53003z"
        ></path>
        <path
          className="uim-tertiary"
          d="M13,3H4C2.34389,3.00181,1.00181,4.34389,1,6v11c0,0.55228,0.44772,1,1,1h13c0.55229,0,1-0.44772,1-1V6C15.99819,4.34389,14.65611,3.00181,13,3z"
        ></path>
        <path
          className="uim-primary"
          d="M22.89001 11.53003l-2.48999-3.33002C19.83215 7.44611 18.94385 7.00189 18 7h-2v6h7v-1C22.99805 11.83716 22.96051 11.67676 22.89001 11.53003zM10.5 9.5h-1v-1c0-.55228-.44771-1-1-1s-1 .44772-1 1v1h-1c-.55228 0-1 .44771-1 1s.44772 1 1 1h1v1c0 .55229.44772 1 1 1s1-.44771 1-1v-1h1c.55229 0 1-.44771 1-1S11.05229 9.5 10.5 9.5zM6 21c-1.65685 0-3-1.34315-3-3s1.34315-3 3-3 3 1.34315 3 3C8.99819 19.65611 7.65611 20.99819 6 21zM18 21c-1.65685 0-3-1.34315-3-3s1.34315-3 3-3 3 1.34315 3 3C20.99819 19.65611 19.65611 20.99819 18 21z"
        ></path>
      </svg>
    </Wrapper>
  );
};
