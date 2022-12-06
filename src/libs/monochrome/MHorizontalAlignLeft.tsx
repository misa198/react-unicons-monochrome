import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHorizontalAlignLeft: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M16,10H4V6h11c0.55229,0,1,0.44772,1,1V10z"
        ></path>
        <path
          className="uim-primary"
          d="M21,18H4v-8h17c0.55228,0,1,0.44771,1,1v6C22,17.55228,21.55228,18,21,18z"
        ></path>
        <path
          className="uim-quaternary"
          d="M3,22c-0.55197,0.00031-0.99969-0.44689-1-0.99886C2,21.00076,2,21.00038,2,21V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v18c0.00031,0.55197-0.44689,0.99969-0.99886,1C3.00076,22,3.00038,22,3,22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
