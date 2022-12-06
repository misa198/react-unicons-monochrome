import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBox: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M20.23,7.24L12,12L3.77,7.24c0.16898-0.29248,0.40995-0.53689,0.7-0.71L11,2.76c0.62072-0.35004,1.37928-0.35004,2,0l6.53,3.77C19.82005,6.70311,20.06102,6.94752,20.23,7.24z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,12v9.5c-0.31529-0.00043-0.6264-0.07223-0.91-0.21L4.5,17.48c-0.61772-0.35735-0.99865-1.01637-1-1.73v-7.5c0.00166-0.35428,0.09466-0.70215,0.27-1.01L12,12z"
        ></path>
        <path
          className="uim-primary"
          d="M20.5,8.25v7.5c-0.00135,0.71363-0.38228,1.37265-1,1.73l-6.62,3.82c-0.27531,0.12984-0.57562,0.1981-0.88,0.2V12l8.23-4.76C20.40534,7.54785,20.49834,7.89572,20.5,8.25z"
        ></path>
      </svg>
    </Wrapper>
  );
};
