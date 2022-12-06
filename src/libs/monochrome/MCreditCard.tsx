import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCreditCard: React.FC<Props> = ({
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
        <rect
          width="20"
          height="2"
          x="2"
          y="9"
          className="uim-quaternary"
        ></rect>
        <path
          className="uim-tertiary"
          d="M19 5H5C3.34515 5.00482 2.00482 6.34515 2 8v1h20V8C21.99518 6.34515 20.65485 5.00482 19 5zM2 17c.00488 1.65485 1.34515 2.99512 3 3h14c1.65485-.00488 2.99512-1.34515 3-3v-6H2V17z"
        ></path>
        <path
          className="uim-primary"
          d="M10,15H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h3c0.55229,0,1,0.44771,1,1S10.55229,15,10,15z"
        ></path>
      </svg>
    </Wrapper>
  );
};
