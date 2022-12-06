import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHeadphoneSlash: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M6,21H3a.99974.99974,0,0,1-1-.99948V14a.99974.99974,0,0,1,.99948-1H6a3.00328,3.00328,0,0,1,3,3v2A3.00328,3.00328,0,0,1,6,21Zm15,0H18a3.00328,3.00328,0,0,1-3-3V16a3.00328,3.00328,0,0,1,3-3h3a.99974.99974,0,0,1,1,.99948V20a.99974.99974,0,0,1-.99948,1Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,3A10,10,0,0,0,2,13v1a.99974.99974,0,0,1,.99945-1H4a8,8,0,0,1,16,0h1a.99974.99974,0,0,1,1,.99945V13A10,10,0,0,0,12,3Z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22a.99676.99676,0,0,1-.707-.293l-18-18A.99989.99989,0,0,1,3.707,2.293l18,18A1,1,0,0,1,21,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
