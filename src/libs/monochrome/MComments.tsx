import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MComments: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21,22H15a6.99657,6.99657,0,1,1,5.60742-2.80762L21.707,20.293A.99991.99991,0,0,1,21,22Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M8,15a6.98728,6.98728,0,0,1,9.86908-6.378A7.99474,7.99474,0,1,0,3.6792,14.90625L2.293,16.293A.99991.99991,0,0,0,3,18H8.68512A6.945,6.945,0,0,1,8,15Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
