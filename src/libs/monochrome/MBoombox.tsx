import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBoombox: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M17,2H7C5.34387,2.00183,4.00183,3.34387,4,5v14c0.00183,1.65613,1.34387,2.99817,3,3h10c1.65613-0.00183,2.99817-1.34387,3-3V5C19.99817,3.34387,18.65613,2.00183,17,2z M12,11c-1.38074,0-2.5-1.11926-2.5-2.5S10.61926,6,12,6s2.5,1.11926,2.5,2.5S13.38074,11,12,11z"
        ></path>
        <circle cx="12" cy="14.5" r="3.5" className="uim-primary"></circle>
        <circle cx="12" cy="8.5" r="2.5" className="uim-quaternary"></circle>
      </svg>
    </Wrapper>
  );
};
