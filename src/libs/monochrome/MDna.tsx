import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDna: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M18.7998 21H9a1 1 0 0 1 0-2h9.7998a1 1 0 1 1 0 2zM16.97021 17H12a1 1 0 0 1 0-2h4.97021a1 1 0 0 1 0 2zM15 5H5.2002a1 1 0 1 1 0-2H15a1 1 0 0 1 0 2zM12 9H7.02979a1 1 0 0 1 0-2H12a1 1 0 0 1 0 2z"
        ></path>
        <path
          className="uim-primary"
          d="M19 23a1 1 0 0 1-1-1 8.77612 8.77612 0 0 0-.1792-1.79736 7.58161 7.58161 0 0 0-.32959-1.15869 9.00946 9.00946 0 0 0-1.31982-2.44239 12.80153 12.80153 0 0 0-4.56641-3.6831.99987.99987 0 0 1 .78809-1.83789A14.63639 14.63639 0 0 1 17.77 15.3999a10.97116 10.97116 0 0 1 1.604 2.97022 9.404 9.404 0 0 1 .40723 1.438A10.714 10.714 0 0 1 20 22 1 1 0 0 1 19 23zM5 23a1 1 0 0 1-1-1 11.20051 11.20051 0 0 1 3.78906-8.32178.99985.99985 0 1 1 1.36231 1.46387A9.133 9.133 0 0 0 6 22 1 1 0 0 1 5 23z"
        ></path>
        <path
          className="uim-primary"
          d="M12,13a.99549.99549,0,0,1-.394-.081C11.29541,12.78613,4,9.57227,4,2A1,1,0,0,1,6,2c0,5.35205,4.61426,8.16455,6.00342,8.88965C13.41113,10.1665,18,7.39551,18,2a1,1,0,0,1,2,0c0,7.57227-7.29541,10.78613-7.606,10.919A.99549.99549,0,0,1,12,13Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
