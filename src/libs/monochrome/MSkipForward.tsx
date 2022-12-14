import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSkipForward: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M5.3335,21.001a3.26142,3.26142,0,0,1-1.61426-.43164A3.38613,3.38613,0,0,1,2,17.58105V6.419A3.38613,3.38613,0,0,1,3.71924,3.43066a3.22972,3.22972,0,0,1,3.29394.03809l9.3335,5.581a3.45884,3.45884,0,0,1,0,5.9004l-9.3335,5.581A3.272,3.272,0,0,1,5.3335,21.001Z"
        ></path>
        <path
          className="uim-primary"
          d="M19,21a3.00328,3.00328,0,0,1-3-3V6a3,3,0,0,1,6,0V18A3.00328,3.00328,0,0,1,19,21Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
