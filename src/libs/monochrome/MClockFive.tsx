import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MClockFive: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12,6a1.003,1.003,0,0,1,1,1v4.73l1.6,2.77a.99911.99911,0,1,1-1.73,1l-1.69-2.93A.9986.9986,0,0,1,11,12V7A1.003,1.003,0,0,1,12,6Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.73l1.6,2.77a.99911.99911,0,1,1-1.73,1l-1.69-2.93A.99867.99867,0,0,1,11,12Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
