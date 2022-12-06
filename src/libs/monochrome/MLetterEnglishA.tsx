import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLetterEnglishA: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M17.96973,19.75732,14.34863,5.27246A2.99524,2.99524,0,0,0,11.43848,3h-.877A2.99524,2.99524,0,0,0,7.65137,5.27246L4.03027,19.75732a.99963.99963,0,1,0,1.93946.48536L7.28033,15h7.43934l1.3106,5.24268a.99963.99963,0,1,0,1.93946-.48536ZM7.78033,13,9.59082,5.75781A.99964.99964,0,0,1,10.56152,5h.877a.99964.99964,0,0,1,.9707.75781L14.21967,13Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
