import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MServerNetworkAlt: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M7,2h10c1.10457,0,2,0.89543,2,2v2c0,1.10457-0.89543,2-2,2H7C5.89543,8,5,7.10457,5,6V4C5,2.89543,5.89543,2,7,2z"
        ></path>
        <path
          className="uim-tertiary"
          d="M7,8h10c1.10457,0,2,0.89543,2,2v2c0,1.10457-0.89543,2-2,2H7c-1.10457,0-2-0.89543-2-2v-2C5,8.89543,5.89543,8,7,8z"
        ></path>
        <circle cx="16" cy="5" r="1" className="uim-primary"></circle>
        <circle cx="16" cy="11" r="1" className="uim-primary"></circle>
        <circle cx="12" cy="20" r="2" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M10 20c0-.36615.10559-.70483.2774-1H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h7.2774C10.10559 20.70483 10 20.36615 10 20zM21 19h-7.2774C13.89441 19.29517 14 19.63385 14 20s-.10559.70483-.2774 1H21c.55231 0 1-.44769 1-1S21.55231 19 21 19zM11 6H8C7.44772 6 7 5.55228 7 5s.44772-1 1-1h3c.55229 0 1 .44772 1 1S11.55229 6 11 6zM11 12H8c-.55228 0-1-.44771-1-1s.44772-1 1-1h3c.55229 0 1 .44771 1 1S11.55229 12 11 12zM11 14v4.2774C11.29517 18.10559 11.63385 18 12 18s.70483.10559 1 .2774V14H11z"
        ></path>
      </svg>
    </Wrapper>
  );
};
