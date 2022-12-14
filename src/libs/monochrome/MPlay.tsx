import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPlay: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M7.16846,21.002a3.42776,3.42776,0,0,1-3.416-3.4209V6.419a3.41577,3.41577,0,0,1,5.124-2.958L18.54,9.042a3.4159,3.4159,0,0,1,0,5.916l-9.66358,5.581A3.41,3.41,0,0,1,7.16846,21.002Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
