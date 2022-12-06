import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MStopCircle: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,22A10,10,0,1,1,22,12,10.01146,10.01146,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M15,16H9a.99974.99974,0,0,1-1-1V9A.99974.99974,0,0,1,9,8h6a.99974.99974,0,0,1,1,1v6A.99974.99974,0,0,1,15,16Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
