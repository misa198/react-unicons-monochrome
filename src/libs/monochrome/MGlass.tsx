import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MGlass: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M15.21,22H8.79a2.9975,2.9975,0,0,1-2.98145-2.66895L4.00635,3.11035A.99956.99956,0,0,1,5,2H19a.99956.99956,0,0,1,.99365,1.11035l-1.80224,16.2207A2.9975,2.9975,0,0,1,15.21,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M18.19141,19.33105,19.45038,8H4.54962l1.259,11.33105A2.9975,2.9975,0,0,0,8.79,22H15.21A2.9975,2.9975,0,0,0,18.19141,19.33105Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
