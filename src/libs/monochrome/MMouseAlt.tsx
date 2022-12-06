import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMouseAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,22a7.00818,7.00818,0,0,1-7-7V9A7,7,0,0,1,19,9v6A7.00818,7.00818,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,10.001a.99974.99974,0,0,1-1-1v-2a1,1,0,1,1,2,0v2A.99974.99974,0,0,1,12,10.001Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
