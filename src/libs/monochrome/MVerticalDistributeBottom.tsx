import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MVerticalDistributeBottom: React.FC<Props> = ({
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
          className="uim-primary"
          d="M21,10H3c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h18c0.55228,0,1,0.44771,1,1S21.55228,10,21,10z M21,20H3c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1S21.55228,20,21,20z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20,12.99945C19.99988,12.44733,19.55212,11.99988,19,12H5c-0.00018,0-0.00037,0-0.00055,0C4.44733,12.00012,3.99988,12.44788,4,13v5h16v-5C20,12.99982,20,12.99963,20,12.99945z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,8V5c0-0.00018,0-0.00037,0-0.00055C18.99988,4.44733,18.55212,3.99988,18,4H6C5.99982,4,5.99963,4,5.99945,4C5.44733,4.00012,4.99988,4.44788,5,5v3H19z"
        ></path>
      </svg>
    </Wrapper>
  );
};
