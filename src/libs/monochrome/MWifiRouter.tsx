import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWifiRouter: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M17.9,22h-13c-1.7,0-3-1.3-3-3v-2c0-1.7,1.3-3,3-3h13c1.7,0,3,1.3,3,3v2C20.9,20.7,19.6,22,17.9,22z"
        ></path>
        <path
          className="uim-primary"
          d="M16.9,14v-3c0,0,0,0,0,0c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H16.9z"
        ></path>
        <circle cx="5.9" cy="18" r="1" className="uim-primary"></circle>
        <circle cx="8.9" cy="18" r="1" className="uim-primary"></circle>
        <circle cx="11.9" cy="18" r="1" className="uim-primary"></circle>
        <path
          className="uim-tertiary"
          d="M17.6,9c-0.4,0-0.7-0.2-0.9-0.5c-0.3-0.5-1-0.6-1.4-0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.3,0.5-0.9,0.6-1.4,0.4C13.2,8.6,13,8,13.3,7.5c0.8-1.4,2.7-1.9,4.1-1.1c0.5,0.3,0.8,0.6,1.1,1.1c0.3,0.5,0.1,1.1-0.4,1.4C18,9,17.8,9,17.6,9z"
        ></path>
        <path
          className="uim-quaternary"
          d="M10.7,7c-0.6,0-1-0.4-1-1c0-0.2,0-0.3,0.1-0.5c1.9-3.3,6.2-4.5,9.6-2.6c1.1,0.6,1.9,1.5,2.6,2.6c0.3,0.5,0.1,1.1-0.4,1.4c-0.5,0.3-1.1,0.1-1.4-0.4c-1.4-2.4-4.4-3.2-6.8-1.8c-0.8,0.4-1.4,1.1-1.8,1.8C11.4,6.8,11.1,7,10.7,7z"
        ></path>
      </svg>
    </Wrapper>
  );
};
