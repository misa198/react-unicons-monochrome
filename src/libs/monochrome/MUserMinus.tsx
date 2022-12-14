import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUserMinus: React.FC<Props> = ({
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
          d="M10,13.5c-2.76142,0-5-2.23858-5-5s2.23858-5,5-5s5,2.23858,5,5C14.99676,11.26008,12.76008,13.49676,10,13.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M13.30652,12.22144C12.42371,13.00647,11.27399,13.49854,10,13.5c-1.27496,0-2.42566-0.49194-3.30884-1.27747C3.92603,13.48206,2,16.26324,2,19.5c0,0.00037,0,0.00073,0,0.00116C2.00031,20.0531,2.44806,20.50031,3,20.5h14c0.00037,0,0.00073,0,0.00116,0c0.55194-0.00031,0.99915-0.44806,0.99884-1C18,16.26233,16.07294,13.48047,13.30652,12.22144z"
        ></path>
        <path
          className="uim-primary"
          d="M21,12.5h-4c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h4c0.55228,0,1,0.44771,1,1S21.55228,12.5,21,12.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
