import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWrench: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M20.99993,16.41054,16.04679,11.4574A6.64559,6.64559,0,0,0,6.80508,3.63929l5.0102,5.0102L8.638,11.82681l-5.006-5.006a6.6455,6.6455,0,0,0,7.82535,9.226L16.41047,21"
        ></path>
      </svg>
    </Wrapper>
  );
};
