import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MExpandLeft: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M9.17188,10.17188a.9968.9968,0,0,1-.707-.293L2.293,3.707A.99989.99989,0,0,1,3.707,2.293L9.87891,8.46484a1,1,0,0,1-.707,1.707Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M9.17188,15.82812a1,1,0,0,1-.707-1.707l5.65625-5.65625a.9999.9999,0,0,1,1.41407,1.41407L9.87891,15.53516A.99679.99679,0,0,1,9.17188,15.82812Z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22a.99676.99676,0,0,1-.707-.293l-6.17188-6.17187a.9999.9999,0,0,1,1.41407-1.41407L21.707,20.293A1,1,0,0,1,21,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M21 22H17a1 1 0 0 1 0-2h3V17a1 1 0 0 1 2 0v4A.99943.99943 0 0 1 21 22zM3 8A.99943.99943 0 0 1 2 7V3A.99943.99943 0 0 1 3 2H7A1 1 0 0 1 7 4H4V7A.99943.99943 0 0 1 3 8z"
        ></path>
      </svg>
    </Wrapper>
  );
};
