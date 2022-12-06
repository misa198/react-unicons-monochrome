import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMailboxAlt: React.FC<Props> = ({
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
          d="M18,17H6V8c0-0.55228,0.44772-1,1-1h10c0.55228,0,1,0.44772,1,1V17z"
        ></path>
        <path
          className="uim-tertiary"
          d="M6,21c0,0.00018,0,0.00037,0,0.00055C6.00012,21.55267,6.44788,22.00012,7,22h10c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1v-4H6V21z"
        ></path>
        <path
          className="uim-primary"
          d="M19,22H5c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h14c0.55228,0,1,0.44772,1,1S19.55228,22,19,22z M13,13h-2c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h2c0.55229,0,1,0.44771,1,1S13.55229,13,13,13z M19,9H5C4.44772,9,4,8.55229,4,8s0.44772-1,1-1h14c0.55228,0,1,0.44772,1,1S19.55228,9,19,9z"
        ></path>
        <path
          className="uim-tertiary"
          d="M7,7h10h0.91003C17.43304,4.16339,14.97223,2,12,2S6.56696,4.16339,6.08997,7H7z"
        ></path>
      </svg>
    </Wrapper>
  );
};
