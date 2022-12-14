import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MGold: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M16,11H8c-0.3,0-0.6-0.1-0.8-0.4C7,10.4,7,10.1,7,9.8l1-5C8.1,4.3,8.5,4,9,4h6c0.5,0,0.9,0.3,1,0.8l1,5c0.1,0.3,0,0.6-0.2,0.8C16.6,10.9,16.3,11,16,11z"
        ></path>
        <path
          className="uim-tertiary"
          d="M10 20H2c-.3 0-.6-.1-.8-.4S1 19.1 1 18.8l1-5C2.1 13.3 2.5 13 3 13h6c.5 0 .9.3 1 .8l1 5c.1.3 0 .6-.2.8S10.3 20 10 20zM22 20h-8c-.3 0-.6-.1-.8-.4C13 19.4 13 19.1 13 18.8l1-5c.1-.5.5-.8 1-.8h6c.5 0 .9.3 1 .8l1 5c.1.3 0 .6-.2.8C22.6 19.9 22.3 20 22 20z"
        ></path>
      </svg>
    </Wrapper>
  );
};
