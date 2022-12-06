import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCaretRight: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M5,21.085a.99956.99956,0,0,1-1-1V3.915a1,1,0,0,1,1.5-.86621l14,8.085a1.00032,1.00032,0,0,1,0,1.73242l-14,8.085A1.00211,1.00211,0,0,1,5,21.085Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
