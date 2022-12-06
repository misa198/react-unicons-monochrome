import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEuroCircle: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <rect
          width="22"
          height="22"
          x="1"
          y="1"
          className="uim-tertiary"
          rx="11"
        ></rect>
        <path
          className="uim-primary"
          d="M15.207,14.94629A3.33469,3.33469,0,0,1,12.58789,16.333,3.43331,3.43331,0,0,1,9.66656,14.5H12a1,1,0,0,0,0-2H9.04816C9.032,12.333,9,12.168,9,12c0-.16821.03192-.333.04816-.5H12a1,1,0,0,0,0-2H9.66681a3.43257,3.43257,0,0,1,2.92108-1.833A3.33469,3.33469,0,0,1,15.207,9.05371,1.00007,1.00007,0,0,0,16.793,7.835a5.31714,5.31714,0,0,0-4.20508-2.168A5.57587,5.57587,0,0,0,7.45563,9.5H6a1,1,0,0,0,0,2H7.02411C7.01251,11.6665,7,11.833,7,12s.01251.3335.02411.5H6a1,1,0,0,0,0,2H7.45532a5.57648,5.57648,0,0,0,5.13257,3.833A5.31714,5.31714,0,0,0,16.793,16.165,1.00007,1.00007,0,0,0,15.207,14.94629Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
