import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileExclamation: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
        ></path>
        <path
          className="uim-primary"
          d="M20 9H15a2 2 0 0 1-2-2V2zM12 15a.99974.99974 0 0 1-1-1V12a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 12 15zM12 18a1.03391 1.03391 0 0 1-.71-.29 1.16213 1.16213 0 0 1-.21045-.33008.94637.94637 0 0 1 0-.75976A1.14883 1.14883 0 0 1 11.29 16.29a1.03332 1.03332 0 0 1 1.41992 0 1.03724 1.03724 0 0 1 .21.33008A.83792.83792 0 0 1 13 17a.99147.99147 0 0 1-.29.71A1.03391 1.03391 0 0 1 12 18z"
        ></path>
      </svg>
    </Wrapper>
  );
};
