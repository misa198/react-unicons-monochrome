import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MVolumeUp: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12,20a1.00061,1.00061,0,0,1-.625-.21875L6.64941,16H3a.99943.99943,0,0,1-1-1V9A.99943.99943,0,0,1,3,8H6.64941L11.375,4.21875A1.00025,1.00025,0,0,1,13,5V19a.9993.9993,0,0,1-1,1Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M14.999,19.91992a1,1,0,0,1-.13867-1.99023,5.99041,5.99041,0,0,0,0-11.85938,1,1,0,0,1,.2793-1.98047,7.99048,7.99048,0,0,1,0,15.82032A.98316.98316,0,0,1,14.999,19.91992Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15,15.82031a1.00011,1.00011,0,0,1-.32422-1.94629,1.98816,1.98816,0,0,0,0-3.748,1.00029,1.00029,0,1,1,.64844-1.89258,3.98894,3.98894,0,0,1,0,7.5332A1.01652,1.01652,0,0,1,15,15.82031Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
