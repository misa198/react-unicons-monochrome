import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MComparison: React.FC<Props> = ({
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
          d="M21,22H3a.99974.99974,0,0,1-1-1V3A1,1,0,0,1,4,3V20H21a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M4,11.458,8.98438,6.47363l2.793,2.793a.99964.99964,0,0,0,1.41407,0l4.793-4.793L20.167,6.65674a.99989.99989,0,1,0,1.41406-1.41406L18.69141,2.35254a.99964.99964,0,0,0-1.41407,0l-4.793,4.793-2.793-2.793a.99964.99964,0,0,0-1.41407,0L4,8.62988Z"
        ></path>
        <path
          className="uim-primary"
          d="M4,19.458l4.98438-4.98438,3.793,3.793a.99964.99964,0,0,0,1.41407,0l7.5-7.5a.99989.99989,0,0,0-1.41407-1.41406l-6.793,6.793-3.793-3.793a.99964.99964,0,0,0-1.41407,0L4,16.62988Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
