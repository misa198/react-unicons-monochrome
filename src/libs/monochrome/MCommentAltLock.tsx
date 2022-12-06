import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAltLock: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M9,8H5C4.44803,8.00031,4.00031,7.55311,4,7.00114C4,7.00076,4,7.00038,4,7V4c0-1.65685,1.34315-3,3-3s3,1.34315,3,3v3c0.00031,0.55197-0.44689,0.99969-0.99886,1C9.00076,8,9.00038,8,9,8z M6,6h2V4c0-0.55228-0.44772-1-1-1S6,3.44772,6,4V6z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21,23c-0.2515,0.00029-0.4938-0.0946-0.67822-0.26562L17.35889,20H9c-1.65611-0.00181-2.99819-1.34389-3-3v-7c0.00181-1.65611,1.34389-2.99819,3-3h10c1.65611,0.00181,2.99819,1.34389,3,3v12C21.99982,22.55221,21.55221,22.99982,21,23z"
        ></path>
        <path
          className="uim-primary"
          d="M9,13H5c-1.65611-0.00181-2.99819-1.34389-3-3V8c0.00181-1.65611,1.34389-2.99819,3-3h4c1.65611,0.00181,2.99819,1.34389,3,3v2C11.99819,11.65611,10.65611,12.99819,9,13z"
        ></path>
      </svg>
    </Wrapper>
  );
};
