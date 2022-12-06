import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAngleLeft: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M14.12109,17.24268a.99678.99678,0,0,1-.707-.293L9.17188,12.707a.99962.99962,0,0,1,0-1.41406l4.24218-4.24268a.99989.99989,0,0,1,1.41406,1.41407L11.293,12l3.53515,3.53564a1,1,0,0,1-.707,1.707Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
