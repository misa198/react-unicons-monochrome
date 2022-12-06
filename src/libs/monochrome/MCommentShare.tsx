import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentShare: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M10.99978,22.5h-8a.99991.99991,0,0,1-.707-1.707l1.67481-1.67481A9.00076,9.00076,0,1,1,10.99978,22.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M19,7.5a1.9834,1.9834,0,0,0-1.17889.3916L16.0719,7.08691l1.90552-.87658a1.99609,1.99609,0,1,0-.97309-1.7533l-1.90295.87537A2.00536,2.00536,0,1,0,14.928,8.76172l2.09467.96362A1.9953,1.9953,0,1,0,19,7.5Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
