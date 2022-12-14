import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSanitizerAlt: React.FC<Props> = ({
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
          d="M12,3V4h2V3h1a1,1,0,0,0,0-2H10.23584A4.593,4.593,0,0,0,6.10547,3.55273a1.00012,1.00012,0,0,0,1.78906.89454A2.60342,2.60342,0,0,1,10.23584,3Z"
        ></path>
        <path
          className="uim-primary"
          d="M16 5a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1V8h6zM14 17H12a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"
        ></path>
        <path
          className="uim-quaternary"
          d="M16,8H10a3.00328,3.00328,0,0,0-3,3v9a3.00328,3.00328,0,0,0,3,3h6a3.00328,3.00328,0,0,0,3-3V11A3.00328,3.00328,0,0,0,16,8Zm-2,9H12a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
