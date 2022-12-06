import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUserNurse: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M20.93994,22H3.06006a1.00012,1.00012,0,0,1-.99414-1.1084,9.99519,9.99519,0,0,1,19.86816,0A1.00012,1.00012,0,0,1,20.93994,22Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M12.708,18.30664l4.70581-4.71478a10.00128,10.00128,0,0,0-10.83264.00348L11.293,18.30713a1.00012,1.00012,0,0,0,.707.293h.00049A1.00175,1.00175,0,0,0,12.708,18.30664Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M11.99512,14a6,6,0,1,1,6-6A6.00656,6.00656,0,0,1,11.99512,14Z"
        ></path>
        <path
          className="uim-primary"
          d="M6.09,9A5.99281,5.99281,0,0,0,17.91,9Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
