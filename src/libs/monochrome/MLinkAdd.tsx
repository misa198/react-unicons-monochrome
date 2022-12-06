import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLinkAdd: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M8.832,15.168a.99963.99963,0,0,0,1.41406,0L15.168,10.24609A.99989.99989,0,1,0,13.75391,8.832L8.832,13.75391A.99964.99964,0,0,0,8.832,15.168Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20.68848 3.31152a4.48393 4.48393 0 0 0-6.333 0L10.47461 7.19287a.99989.99989 0 1 0 1.41406 1.41406l3.88086-3.88134a2.47832 2.47832 0 0 1 3.50488 3.50488l-3.88183 3.88135a.99989.99989 0 1 0 1.41406 1.41406l3.88184-3.88135A4.48305 4.48305 0 0 0 20.68848 3.31152zM12.11133 15.39307L8.23047 19.27441a2.47832 2.47832 0 0 1-3.50488-3.50488l3.88183-3.88135a.99989.99989 0 1 0-1.41406-1.41406L3.31152 14.35547a4.47812 4.47812 0 0 0 6.333 6.333l3.88086-3.88135a.99989.99989 0 0 0-1.41406-1.41406z"
        ></path>
        <path
          className="uim-primary"
          d="M21,18H20V17a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V20h1a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
