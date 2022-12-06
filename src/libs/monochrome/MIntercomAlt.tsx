import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MIntercomAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <g data-name="Brand Logos">
          <path
            className="uim-tertiary"
            d="M20,23H4a3.00328,3.00328,0,0,1-3-3V4A3.00328,3.00328,0,0,1,4,1H20a3.00328,3.00328,0,0,1,3,3V20A3.00328,3.00328,0,0,1,20,23Z"
          ></path>
          <path
            className="uim-primary"
            d="M12 19a10.79981 10.79981 0 0 1-6.64355-2.06055 1.00017 1.00017 0 0 1 1.2871-1.53125A8.987 8.987 0 0 0 12 17a8.99529 8.99529 0 0 0 5.36133-1.59473.9998.9998 0 0 1 1.28125 1.53516A10.795 10.795 0 0 1 12 19zM6 13a.99943.99943 0 0 1-1-1V8A1 1 0 0 1 7 8v4A.99943.99943 0 0 1 6 13zM10 15a.99943.99943 0 0 1-1-1V6a1 1 0 0 1 2 0v8A.99943.99943 0 0 1 10 15zM14 15a.99943.99943 0 0 1-1-1V6a1 1 0 0 1 2 0v8A.99943.99943 0 0 1 14 15zM18 13a.99943.99943 0 0 1-1-1V8a1 1 0 0 1 2 0v4A.99943.99943 0 0 1 18 13z"
          ></path>
        </g>
      </svg>
    </Wrapper>
  );
};
