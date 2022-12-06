import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBullseye: React.FC<Props> = ({
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
          d="M12,3c-4.97058,0-9,4.02942-9,9s4.02942,9,9,9s9-4.02942,9-9S16.97058,3,12,3z M12,19c-3.86597,0-7-3.13403-7-7s3.13403-7,7-7s7,3.13403,7,7S15.86597,19,12,19z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,5c-3.86597,0-7,3.13403-7,7s3.13403,7,7,7s7-3.13403,7-7S15.86597,5,12,5z M12,17c-2.76141,0-5-2.23859-5-5s2.23859-5,5-5s5,2.23859,5,5S14.76141,17,12,17z"
        ></path>
        <circle cx="12" cy="12" r="3" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M12,7c-2.76141,0-5,2.23859-5,5s2.23859,5,5,5s5-2.23859,5-5S14.76141,7,12,7z M12,15c-1.65686,0-3-1.34314-3-3s1.34314-3,3-3s3,1.34314,3,3S13.65686,15,12,15z"
        ></path>
        <circle cx="12" cy="12" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
