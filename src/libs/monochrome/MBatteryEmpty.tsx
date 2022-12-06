import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBatteryEmpty: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21 14a.99974.99974 0 0 1-1-1V11a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 21 14zM17 17H4a2.00229 2.00229 0 0 1-2-2V9A2.00229 2.00229 0 0 1 4 7H17a2.00229 2.00229 0 0 1 2 2v6A2.00229 2.00229 0 0 1 17 17z"
        ></path>
      </svg>
    </Wrapper>
  );
};
