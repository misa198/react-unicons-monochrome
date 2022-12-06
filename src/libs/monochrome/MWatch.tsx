import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWatch: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M15,18H9c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h6c1.65611,0.00181,2.99819,1.34389,3,3v6C17.99819,16.65611,16.65611,17.99819,15,18z"
        ></path>
        <path
          className="uim-primary"
          d="M9 6h6c.77191.00085 1.46844.30109 2 .78033V3c0-.00018 0-.00037 0-.00055C16.99988 2.44733 16.55212 1.99988 16 2H8C7.99982 2 7.99963 2 7.99945 2 7.44733 2.00012 6.99988 2.44788 7 3v3.78033C7.53156 6.30109 8.22809 6.00085 9 6zM15 18H9c-.77191-.00085-1.46844-.30109-2-.78033V21c0 .00018 0 .00037 0 .00055C7.00012 21.55267 7.44788 22.00012 8 22h8c.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-3.78033C16.46844 17.69891 15.77191 17.99915 15 18z"
        ></path>
      </svg>
    </Wrapper>
  );
};
