import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentChartLine: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12.00011,22h-9a.99991.99991,0,0,1-.707-1.707L4.257,18.3291A10.00061,10.00061,0,1,1,12.00011,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M12 16a.99974.99974 0 0 1-1-1V11a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 12 16zM8 16a.99974.99974 0 0 1-1-1V14a1 1 0 0 1 2 0v1A.99974.99974 0 0 1 8 16zM16 16a.99974.99974 0 0 1-1-1V9a1 1 0 0 1 2 0v6A.99974.99974 0 0 1 16 16z"
        ></path>
      </svg>
    </Wrapper>
  );
};
