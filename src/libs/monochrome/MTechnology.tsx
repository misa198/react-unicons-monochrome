import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTechnology: React.FC<Props> = ({
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
        <circle cx="12" cy="19" r="2" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M12 17c.36615 0 .70483.10559 1 .2774V13h-2v4.2774C11.29517 17.10559 11.63385 17 12 17zM10 19c0-.36615.10559-.70483.2774-1H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h7.2774C10.10559 19.70483 10 19.36615 10 19zM21 18h-7.2774C13.89441 18.29517 14 18.63385 14 19s-.10559.70483-.2774 1H21c.55231 0 1-.44769 1-1S21.55231 18 21 18z"
        ></path>
        <path
          className="uim-quaternary"
          d="M20,13H4c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h16c0.55228,0,1,0.44771,1,1S20.55228,13,20,13z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19,11V5c-0.00183-1.65613-1.34387-2.99817-3-3H8C6.34387,2.00183,5.00183,3.34387,5,5v6H19z"
        ></path>
      </svg>
    </Wrapper>
  );
};