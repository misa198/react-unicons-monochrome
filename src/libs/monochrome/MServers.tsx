import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MServers: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M8,3h8c1.10457,0,2,0.89543,2,2v2c0,1.10457-0.89543,2-2,2H8C6.89543,9,6,8.10457,6,7V5C6,3.89543,6.89543,3,8,3z"
        ></path>
        <path
          className="uim-tertiary"
          d="M8,9h8c1.10457,0,2,0.89543,2,2v2c0,1.10457-0.89543,2-2,2H8c-1.10457,0-2-0.89543-2-2v-2C6,9.89543,6.89543,9,8,9z"
        ></path>
        <path
          className="uim-quaternary"
          d="M8,15h8c1.10457,0,2,0.89543,2,2v2c0,1.10457-0.89543,2-2,2H8c-1.10457,0-2-0.89543-2-2v-2C6,15.89543,6.89543,15,8,15z"
        ></path>
        <path
          className="uim-primary"
          d="M20 12h-2v1c0 1.10455-.89545 2-2 2 1.10455 0 2 .89545 2 2v1h2c1.10321-.00323 1.99677-.89679 2-2v-2C21.99677 12.89679 21.10321 12.00323 20 12zM6 17c0-1.10455.89545-2 2-2-1.10455 0-2-.89545-2-2v-1H4c-1.10321.00323-1.99677.89679-2 2v2c.00323 1.10321.89679 1.99677 2 2h2V17z"
        ></path>
        <path
          className="uim-secondary"
          d="M6 11c0-1.10455.89545-2 2-2C6.89545 9 6 8.10455 6 7V6H4C2.89679 6.00323 2.00323 6.89679 2 8v2c.00323 1.10321.89679 1.99677 2 2h2V11zM20 6h-2v1c0 1.10455-.89545 2-2 2 1.10455 0 2 .89545 2 2v1h2c1.10321-.00323 1.99677-.89679 2-2V8C21.99677 6.89679 21.10321 6.00323 20 6z"
        ></path>
        <circle cx="15" cy="6" r="1" className="uim-primary"></circle>
        <circle cx="15" cy="12" r="1" className="uim-primary"></circle>
        <circle cx="15" cy="18" r="1" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M11,7H9C8.44771,7,8,6.55228,8,6s0.44771-1,1-1h2c0.55229,0,1,0.44772,1,1S11.55229,7,11,7z M11,13H9c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h2c0.55229,0,1,0.44771,1,1S11.55229,13,11,13z M11,19H9c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1h2c0.55229,0,1,0.44772,1,1S11.55229,19,11,19z"
        ></path>
      </svg>
    </Wrapper>
  );
};
